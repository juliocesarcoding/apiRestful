import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import main from "./routes/index";

import { initDatabase } from "./database/db";
import { sendError } from "./utils/responseHandler";
const server = express();
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use("/api", main);
server.use((req: Request, res: Response) => {
 sendError(res, "Route not found", null, 404);
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
 console.log(err);
 sendError(res, err.message, null, 400);
};
server.use(errorHandler);
server.use(express.json());

(async () => {
 initDatabase();
})();

export default server;
