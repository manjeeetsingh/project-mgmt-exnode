import mongoose, { Document, Schema } from "mongoose";
import { IUserStory } from "./UserStory";
import { ISprint } from "./Sprint";
import { IProject } from "./Project";
export interface IPie extends Document {
  name: string;
  description: string;
  projectId: IProject["_id"];
  sprints: [ISprint["_id"]];
}

export const PieSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  projectId: { type: Schema.Types.ObjectId },
  sprints: [{ type: Schema.Types.ObjectId, ref: "Sprint" }],
});

const Pie = mongoose.model<IPie>("PPieir", PieSchema);
export default Pie;
