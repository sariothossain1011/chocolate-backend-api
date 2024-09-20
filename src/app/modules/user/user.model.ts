import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import { boolean } from 'zod';

export const UserSchema = new Schema<IUser, UserModel>(
  {
    fullName: {
      type: String,
    },
    fullAddress: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isSubscribe: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser, UserModel>('User', UserSchema);
