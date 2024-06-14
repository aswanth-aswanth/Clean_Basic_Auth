import mongoose, { Schema, Document } from 'mongoose';

export interface IRefreshToken extends Document {
  userId: string;
  token: string;
  expiresAt: Date;
}

const RefreshTokenSchema: Schema = new Schema({
  userId: { type: String, required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true }
});

export default mongoose.model<IRefreshToken>('RefreshToken', RefreshTokenSchema);
