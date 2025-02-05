import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mainRoutes from "./routes/index";
import { initDatabase } from "./database";

dotenv.config();

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(mainRoutes);

server.use((req: Request, res: Response) => {
 res.status(404).send("Página não encontrada!");
});
initDatabase().then((db) => {
 console.log("🎬 Banco de dados pronto!");
 server.set("db", db);
});

server.listen(process.env.PORT);
