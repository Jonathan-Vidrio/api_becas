import { Document, Schema, Model } from "mongoose";

interface IRole extends Document {
    name: string;
};

export {
    IRole,
}