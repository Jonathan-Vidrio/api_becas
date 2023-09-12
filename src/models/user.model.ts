import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser, IUserModel } from "../interface/user.interface";

const UserSchema: Schema = new Schema<IUser>({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{ 
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
    isOK: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

UserSchema.statics.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password: string, receivedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, receivedPassword);
};

export default model<IUser, IUserModel>("User", UserSchema);