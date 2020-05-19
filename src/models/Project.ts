import mongoose, { Document, Schema } from "mongoose";
import { IEpic } from "./Epic";
import { IFeature } from "./Feature";
import { IPie } from "./Pie";
export interface IProject extends Document {
  name: string;
  description: string;
  users: [IProject["_id"]];
  epics: [IEpic["_id"]];
  features: [IFeature["_id"]];
  pies: [IPie["_id"]];
}

export const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  users: [{ userId: { type: Schema.Types.ObjectId, ref: "User" } }],
  epics: [{ userId: { type: Schema.Types.ObjectId, ref: "Epic" } }],
  features: [{ userId: { type: Schema.Types.ObjectId, ref: "Feature" } }],
  pies: [{ userId: { type: Schema.Types.ObjectId, ref: "Pie" } }],
});

const Project = mongoose.model<IProject>("Project", ProjectSchema);
export default Project;
