import mongoose, { Document, Schema } from "mongoose";
import { IUserStory } from "./UserStory";
export interface ITask extends Document {
  name: string;
  description: string;
  userStoryId: IUserStory["_id"];
  bugId: IUserStory["_id"];
}

export const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  userStoryId: { type: Schema.Types.ObjectId },
  bugId: { type: Schema.Types.ObjectId },
});

const Task = mongoose.model<ITask>("Task", TaskSchema);
export default Task;
