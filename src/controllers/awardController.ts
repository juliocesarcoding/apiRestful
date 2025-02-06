import { Request, Response } from "express";
import { getAwardsOfProducersWithMoreWin } from "../services/awardService";

export const getAwards = (req: Request, res: Response) => {
 const result = getAwardsOfProducersWithMoreWin();
 res.status(200).json(result);
};
