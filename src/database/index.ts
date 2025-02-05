import Database from "better-sqlite3";
import { createTable } from "./schema";
import { insertMoviesFromCsv } from "./seed";
const db = new Database(":memory:");

export const initDatabase = async () => {
 db.exec(createTable);
 console.log("Database initialized");
};

export default db;
