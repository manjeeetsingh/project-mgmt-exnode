import mongoose, { Document, Schema } from "mongoose";
import { IUserStory } from "./UserStory";
import { IBug } from "./Bug";
import { IPie } from "./Pie";
export interface ISprint extends Document {
  name: string;
  description: string;
  pieId: IPie["_id"];
  userStories: [IUserStory["_id"]];
  bugs: [IBug["_id"]];
}

export const SprintSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  pieId: { type: Schema.Types.ObjectId },
  userStories: [{ type: Schema.Types.ObjectId, ref: "UserStory" }],
  bugs: [{ type: Schema.Types.ObjectId, ref: "Bug" }],
});

const Sprint = mongoose.model<ISprint>("Sprint", SprintSchema);
export default Sprint;
