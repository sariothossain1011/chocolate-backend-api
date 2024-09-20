import { Model } from 'mongoose';

export type IUser = {
  fullName?: string;
  fullAddress?: string;
  phone?: string;
  email?: string;
  password?: string;
  isSubscribe?: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
