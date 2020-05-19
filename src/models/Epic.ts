import mongoose, { Document, Schema } from "mongoose";
import { IProject } from "./Project";
import { IFeature } from "./Feature";
export interface IEpic extends Document {
  name: string;
  description: string;
  projectId: IProject["_id"];
  features: [IFeature["_id"]];
}

export const EpicSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  projectId: { type: Schema.Types.ObjectId, ref: "Project" },
  features: [{ featureId: { type: Schema.Types.ObjectId, ref: "Feature" } }],
});

const Epic = mongoose.model<IEpic>("Epic", EpicSchema);
export default Epic;
