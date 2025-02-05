import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import main from "./routes/index";

import { initDatabase } from "./database";
const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use("/api", main);
server.use((req: Request, res: Response) => {
 res.status(404);
 res.json({ error: "Endpoint not found." });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
 res.status(400);
 console.log(err);
 res.json({ error: "An error occured. Bad Request" });
};
// initDatabase();
server.use(errorHandler);
server.use(express.json());

export default server;
