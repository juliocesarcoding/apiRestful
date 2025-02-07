import { Request, Response } from "express";
import { getAwardsOfProducersWithMoreWin } from "../services/awardService";
import { sendError, sendSuccess } from "../utils/responseHandler";

export const getAwards = (req: Request, res: Response) => {
 const result = getAwardsOfProducersWithMoreWin();
 if (!result) {
  sendError(res, "No awards found", null, 404);
 }
 res.status(200).json(result);
};
