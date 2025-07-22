import { Request, Response } from 'express';

export const healthCheck = async (_req: Request, res: Response): Promise<void> => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.status(200).json(healthcheck);
  } catch (error) {
    res.status(503).send();
  }
};