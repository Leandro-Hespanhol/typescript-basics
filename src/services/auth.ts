import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';
import connection from '../models/connection';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    const secret = process.env.JWT_SECRET || 'segredo';
    const decode: any = await jwt.verify(token, secret);

    const query = 'SELECT * FROM Trybesmith.Users WHERE username=?';
    const [[checking]] = await connection
      .execute<RowDataPacket[]>(query, [decode.payload.username]);

    req.body = { ...req.body, user: checking };
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};