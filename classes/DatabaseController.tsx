import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import {Clothe, Type} from "@/classes/clothe"

export default class DatabaseController {

    // Database cache, use getDatabase when accessing the database.
    private static database: SQLite.SQLiteDatabase | null = null;

    // Clothes cache, use getClothes when querying for the clothes.
    private static clothes: Clothe[] = [];

    private constructor() {
    }

    /**
     * If the database has not been opened, then opens the database (closet.db), and creates a clothes table
     * if it doesn't exist.
     */
    private static async getDatabase(): Promise<SQLite.SQLiteDatabase> {
        if (this.database !== null) {
            return this.database;
        }

        // As per the documentation https://docs.expo.dev/versions/latest/sdk/sqlite/#sqliteopendatabasename-version-description-size-callback,
        // the database is stored inside an SQLite folder which resides in the application's directory. This ensures
        // that the folder is created if it doesn't exist.
        if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
            await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
        }

        this.database = SQLite.openDatabase('closet.db');

        await this.database.transactionAsync(async tx => {
            await tx.executeSqlAsync('CREATE TABLE IF NOT EXISTS clothes(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, link TEXT, clothe TEXT)', []);
        }, false);

        return this.database;
    }

    /**
     * Gets all the clothes from the DB.
     */
    public static async getClothes(): Promise<Clothe[]> {
        if (this.clothes.length !== 0) return this.clothes;

        const db = await this.getDatabase();
        await db.transactionAsync(async tx => {
            const clotheRows = (await tx.executeSqlAsync('SELECT * FROM clothes')).rows;
            this.clothes = clotheRows.map((value, index, array) => {
                return Clothe.deserialize(value.clothe);
            });
        }, true);

        return this.clothes;
    }

    /**
     * Inserts a clothe object into the clothes table.
     * @param clothe The clothe object or null.
     * @return Returns true if it successfully added the Clothe object to the DB, false otherwise.
     */
    public static async addClothe(clothe: Clothe): Promise<boolean> {
        const db = await this.getDatabase();
        let success = false;

        console.log(`Saving ${clothe.name} to clothes table`)

        await db.transactionAsync(async tx => {
            const result = await tx.executeSqlAsync('INSERT INTO clothes (clothe) VALUES (?)',
                [clothe.serialize()]);
            success = result.rowsAffected > 0;
        }, false);

        // Add the clothe to the cached clothes array
        if (success) {
            this.clothes.push(clothe);
        }

        return success;
    }

    /**
     * Filters the clothes from the DB.
     * @param type The type of clothes to filter.
     * @param color The color of the clothes to filter.
     * @param sleeveSize The sleeve size of the clothes to filter.
     * @return The filtered clothes based on the filters passed.
     */
    public static async filterClothes(type?: Type, color?: string, sleeveSize?: number): Promise<Clothe[]> {
        return (await this.getClothes())
            .filter((clothe) => {
                let shouldFilter = true;

                if (type !== undefined) {
                    shouldFilter = shouldFilter && clothe.type === type;
                }

                if (color !== undefined) {
                    shouldFilter = shouldFilter && clothe.color === color;
                }

                if (sleeveSize !== undefined) {
                    shouldFilter = shouldFilter && clothe.sleeveSize === sleeveSize;
                }

                return shouldFilter;
            });
    }
}
