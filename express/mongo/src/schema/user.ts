import mongoose from "mongoose";

type User = {
  name: string;
  username: string;
  nickname: string;
  _id: string;
};

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  nickname: { type: String, required: true },
  _id: { type: String, required: true },
});

const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;
