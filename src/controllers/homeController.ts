import { Request, Response } from "express";

import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
 res.send("pong ");
};
