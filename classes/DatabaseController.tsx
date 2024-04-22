import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import {Clothe} from "@/classes/clothe"

export class DatabaseController {

    // Database cache, use getDatabase when accessing the database.
    private static database: SQLite.SQLiteDatabase | null = null;

    // Clothes cache, use getClothes when querying for the clothes.
    private static clothes: Map<number, Clothe> = new Map<number, Clothe>();
    private static filter?: DatabaseController.Filter;

    public static dependencies: DatabaseController.ClotheAddedCallback[] = [];

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
            await tx.executeSqlAsync('CREATE TABLE IF NOT EXISTS clothes(id INTEGER PRIMARY KEY AUTOINCREMENT, clothe TEXT)', []);
        }, false);

        return this.database;
    }

    /**
     * Applies the filter to the clothes cached.
     * @return The cached clothes with the current filters applied.
     */
    private static filteredClothes(): Map<number, Clothe> {
        const result = new Map<number, Clothe>;

        for (const [id, clothe] of this.clothes) {
            let shouldFilter = true;

            if (this.filter?.type !== undefined) {
                shouldFilter = shouldFilter && clothe.type === this.filter.type;
            }

            if (this.filter?.color !== undefined) {
                shouldFilter = shouldFilter && clothe.color === this.filter.color;
            }

            if (this.filter?.sleeveSize !== undefined) {
                shouldFilter = shouldFilter && clothe.sleeveSize === this.filter.sleeveSize;
            }

            if (!shouldFilter) {
                result.set(id, clothe);
            }
        }
        return result;
    }

    /**
     * Gets all the clothes from the DB.
     * If there is a filter present, then it is applied.
     */
    public static async getClothes(): Promise<Map<number, Clothe>> {
        if (Object.entries(this.clothes).length !== 0) return this.filteredClothes();

        const db = await this.getDatabase();
        await db.transactionAsync(async tx => {
            const clotheRows = (await tx.executeSqlAsync('SELECT * FROM clothes')).rows;
            for (const rowClothe of clotheRows) {
                this.clothes.set(rowClothe.id, Clothe.deserialize(rowClothe.clothe));
            }
        }, true);

        return this.filteredClothes();
    }

    /**
     * Inserts a clothe object into the clothes table.
     * @param clothe The clothe object to add to the database.
     * @return Returns true if it successfully added the Clothe object to the DB, false otherwise.
     */
    public static async addClothe(clothe: Clothe): Promise<boolean> {
        const db = await this.getDatabase();
        let success = false;
        let clotheId = undefined;

        console.log(`Saving ${clothe.name} to clothes table`)

        await db.transactionAsync(async tx => {
            const result = await tx.executeSqlAsync('INSERT INTO clothes (clothe) VALUES (?)',
                [clothe.serialize()]);
            success = result.rowsAffected > 0;
            clotheId = result.insertId;
        }, false);

        // Add thy clothe to the cached clothes map
        if (success && clotheId !== undefined) {
            this.clothes.set(clotheId, clothe);
            this.notifyAllRegisteredCallbacksOfClothesChange();
        }

        return success;
    }

    /**
     * Updates a clothe object in the database with a certain id.
     * @param id The database ID of the clothe object.
     * @param clothe The clothe object to update in the database.
     * @return Returns true if it successfully updated the Clothe object in the DB, false otherwise.
     */
    public static async editClothe(id: number, clothe: Clothe): Promise<boolean> {
        const db = await this.getDatabase();
        let success = false;

        console.log(`Updating ${clothe.name} in clothes table`)

        await db.transactionAsync(async tx => {
            const result = await tx.executeSqlAsync('UPDATE clothes SET clothe = ? WHERE id = ?',
                [clothe.serialize(), id]);
            success = result.rowsAffected > 0;
        }, false);

        // Update thy clothe in the cached clothes map
        if (success) {
            this.clothes.set(id, clothe);
            this.notifyAllRegisteredCallbacksOfClothesChange();
        }

        return success;
    }

    /**
     * Filters the clothes from the DB.
     * Will notify all registered callbacks.
     *
     * @param filter The filter to apply to the clothe items saved in the DB.
     * @return The filtered clothes based on the filters passed.
     */
    public static applyFilter(filter: DatabaseController.Filter) {
        this.filter = filter;
        console.log(`Applying filter with ${filter.type}, ${filter.color} and ${filter.sleeveSize}`);
        this.notifyAllRegisteredCallbacksOfClothesChange();
    }

    /**
     * Notifies all registered callbacks that the clothes have changed.
     */
    private static notifyAllRegisteredCallbacksOfClothesChange() {
        this.dependencies.forEach((registeredCallback) => {
            registeredCallback.callback();
        });
    }
}

export namespace DatabaseController {
    /**
     * A filter meant for obtained the desired Clothe items from the database.
     * Properties should be undefined whenever filter of said property is undesired.
     */
    export class Filter {
        public type?: Clothe.Type;
        public color?: Clothe.Color;
        public sleeveSize?: Clothe.SleeveSize;

        constructor(type?: Clothe.Type, color?: Clothe.Color, sleeveSize?: Clothe.SleeveSize) {
            this.type = type;
            this.color = color;
            this.sleeveSize = sleeveSize;
        }
    }

    /**
     * Callback interface used by components that need to refresh whenever there is a new clothe added to the database.
     * Components should add their own implementation to the DatabaseController.dependencies array, and then
     * add their own trigger implementation from the component.
     */
    export interface ClotheAddedCallback {
        callback(): void;
    }
}
