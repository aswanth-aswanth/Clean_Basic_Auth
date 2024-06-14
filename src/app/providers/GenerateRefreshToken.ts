import jwt from 'jsonwebtoken';
import { IRefreshToken } from '../../infra/databases/mongoose/models/RefreshToken';

export default class GenerateRefreshToken {
  public execute(userId: string): string {
    const refreshToken = jwt.sign({ userId }, 'refresh-secret', {
      expiresIn: '7d'
    });

    return refreshToken;
  }
}
