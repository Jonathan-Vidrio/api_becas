import { Document, Schema, Model } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    roles: Array<Schema.Types.ObjectId>;
    isOK: boolean;
};

interface IUserModel extends Model<IUser> {
  encryptPassword(password: string): Promise<string>;
  comparePassword(password: string, receivedPassword: string): Promise<boolean>;
};

export {
    IUser,
    IUserModel,
};