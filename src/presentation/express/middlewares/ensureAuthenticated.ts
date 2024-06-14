import { Request, Response, NextFunction } from 'express';
import TokenManager from '../../../app/providers/TokenManager';

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = new TokenManager().verifyToken(token);
    req.user = decoded;
    return next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
