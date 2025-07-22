// TYPES
import { Request, Response } from 'express';
// UTILS
import transport from '@/mcp';

export const handleStreamableHttp 
= async (req: Request, res: Response) => await transport.handleRequest(req, res, req.body);