import mongoose, { Document, Schema } from "mongoose";
export interface IUser extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
  projects: [IUser["_id"]];
}

export const UserSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  projects: [{ projectId: { type: Schema.Types.ObjectId, ref: "Project" } }],
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
