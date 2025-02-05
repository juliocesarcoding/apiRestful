import { Request, Response } from "express";
import { getProducersWithIntervals } from "../services/producerService";

export const getProducersIntervals = (req: Request, res: Response) => {
 const result = getProducersWithIntervals();
 res.status(200).json(result);
};
