import { Response } from "express";

export const sendSuccess = (
 res: Response,
 message: string,
 data: any = null,
 statusCode: number = 200
) => {
 return res.status(statusCode).json({
  success: true,
  message,
  data,
  error: null,
 });
};

export const sendError = (
 res: Response,
 message: string,
 error: any = null,
 statusCode: number = 500
) => {
 return res.status(statusCode).json({
  success: false,
  message,
  data: null,
  error,
 });
};
