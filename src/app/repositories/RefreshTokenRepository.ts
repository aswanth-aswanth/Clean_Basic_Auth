import RefreshToken, { IRefreshToken } from '../../infra/databases/mongoose/models/RefreshToken';

export default class RefreshTokenRepository {
  public async create(refreshToken: IRefreshToken): Promise<IRefreshToken> {
    const newRefreshToken = new RefreshToken(refreshToken);
    return newRefreshToken.save();
  }

  public async findByToken(token: string): Promise<IRefreshToken | null> {
    return RefreshToken.findOne({ token });
  }

  public async deleteByToken(token: string): Promise<void> {
    await RefreshToken.deleteOne({ token });
  }
}
