import { Schema, model } from "mongoose";
import { IRole } from "../interface/role.interface"

const roleSchema: Schema = new Schema<IRole> ({
    name: String,
}, {
    versionKey: false
});

export default model<IRole>("Role", roleSchema);