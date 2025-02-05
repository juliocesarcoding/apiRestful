import { Request, Response } from "express";
import { initDatabase } from "../database";
import { Database } from "better-sqlite3";

export const home = (req: Request, res: Response) => {
 const db: any = initDatabase();
 const movies = db.prepare("SELECT * FROM movies");
 console.log("MOvies", movies);
 res.send("pong ");
};
