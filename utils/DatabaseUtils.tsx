import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import {Clothe, Type} from "@/classes/clothe"

/**
 * Opens the database (closet.db) and creates a clothes table if it doesn't exist.
 */
async function openDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }

    const db = SQLite.openDatabase('closet.db');

    await db.transactionAsync(async tx => {
        await tx.executeSqlAsync('CREATE TABLE IF NOT EXISTS clothes(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, link TEXT, clothe TEXT)', []);
    }, false);

    return db;
}

/**
 * Inserts a clothe object into the clothes table.
 * @param clothe The clothe object or null.
 * @return Returns true if it successfully added the Clothe object to the DB, false otherwise.
 */
export async function insertClothe(clothe: Clothe): Promise<boolean> {
    const db = SQLite.openDatabase('closet.db');
    const serializedClothe = JSON.stringify(clothe);
    let success = false;

    console.log(`Saving ${serializedClothe} to clothes table`)

    await db.transactionAsync(async tx => {
        const result = await tx.executeSqlAsync('INSERT INTO clothes (clothe) VALUES (?)',
            [serializedClothe]);
        success = result.rowsAffected > 0;
    }, false);

    return success;
}

/**
 * Gets all the clothes from the DB.
 */
export async function getClothes(): Promise<Clothe[]> {
    const db = await openDatabase();
    let clothes: Clothe[] = [];

    await db.transactionAsync(async tx => {
        const clotheRows = (await tx.executeSqlAsync('SELECT * FROM clothes')).rows;
        clothes = clotheRows.map((value, index, array) => {
            return JSON.parse(value.clothe);
        });
    }, true);

    return clothes;
}

/**
 * Filters the clothes from the DB.
 * @param type The type of clothes to filter.
 * @param color The color of the clothes to filter.
 * @param sleeveSize The sleeve size of the clothes to filter.
 * @return The filtered clothes based on the filters passed.
 */
export async function filterClothes(type?: Type, color?: string, sleeveSize?: number): Promise<Clothe[]> {
    return (await getClothes())
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