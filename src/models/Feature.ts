import mongoose, { Document, Schema } from "mongoose";
import { IProject } from "./Project";
import { IEpic } from "./Epic";
import { IUserStory } from "./UserStory";
import { IBug } from "./Bug";
export interface IFeature extends Document {
  name: string;
  description: string;
  projectId: IProject["_id"];
  epicId: IEpic["_id"];
  userStories: [IUserStory["_id"]];
  bugs: [IBug["_id"]];
}

export const FeatureSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  projectId: { type: Schema.Types.ObjectId, ref: "Project" },
  epicId: { type: Schema.Types.ObjectId, ref: "Epic" },
  userStories: [{ type: Schema.Types.ObjectId, ref: "UserStory" }],
  bugs: [{ type: Schema.Types.ObjectId, ref: "Bug" }],
});

const Feature = mongoose.model<IFeature>("Feature", FeatureSchema);
export default Feature;
