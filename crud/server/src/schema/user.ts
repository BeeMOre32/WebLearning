import mongoose from "mongoose";
import bcryppt from "bcryptjs";

export type User = {
  name: string;
  username: string;
  nickname: string;
  password: string;
  _id?: string;
};

const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcryppt.genSalt(10);
  user.password = await bcryppt.hash(user.password, salt);

  console.log("salted password", user.password);

  next();
});

const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;
