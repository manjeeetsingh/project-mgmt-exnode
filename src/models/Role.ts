import mongoose, { Document, Schema } from "mongoose";
import { IFeature } from "./Feature";
import { ITask } from "./Task";
export interface IRole extends Document {
  name: string;
  type: string;
}

export const RoleSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
});

const Role = mongoose.model<IRole>("Role", RoleSchema);
export default Role;
