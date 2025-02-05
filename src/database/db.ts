import Database from "better-sqlite3";
const db = new Database(":memory:", { verbose: console.log });
export default db;
