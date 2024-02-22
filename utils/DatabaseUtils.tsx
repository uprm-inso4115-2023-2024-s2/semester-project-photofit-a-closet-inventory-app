import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

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
 * @param name The name of the clothe.
 * @param description The description of the clothe.
 * @param link The link of the clothe image.
 * @param clothe The clothe object or null.
 * @return Returns true is it successfully added the clothe to the DB, false otherwise.
 */
export async function insertClothe(name: string, description: string, link: string, clothe: Clothe | null): Promise<boolean> {
    const db = await openDatabase();
    const serializedClothe = JSON.stringify(clothe);
    let success = false;

    console.log(`Saving ${name}, ${description}, ${link} and ${serializedClothe} to clothes table`)

    await db.transactionAsync(async tx => {
        const result = await tx.executeSqlAsync('INSERT INTO clothes (name, description, link, clothe) VALUES (?, ?, ?, ?)',
            [name, description, link, serializedClothe]);
        success = result.rowsAffected > 0;
    }, false);

    return success;
}
