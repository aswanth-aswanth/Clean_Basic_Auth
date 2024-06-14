export class RefreshToken {
    constructor(
      public userId: string,
      public token: string,
      public expiresAt: Date
    ) {}
  }
  