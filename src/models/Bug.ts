import mongoose, { Document, Schema } from "mongoose";
import { IFeature } from "./Feature";
import { ITask } from "./Task";
export interface IBug extends Document {
  name: string;
  description: string;
  featureId: IFeature["_id"];
  tasks: [ITask["_id"]];
}

export const BugSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  featureId: { type: Schema.Types.ObjectId },
  tasks: [{ taskId: { type: Schema.Types.ObjectId, ref: "Task" } }],
});

const Bug = mongoose.model<IBug>("Bug", BugSchema);
export default Bug;
