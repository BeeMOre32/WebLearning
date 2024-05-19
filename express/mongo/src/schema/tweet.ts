import mongoose, { Schema } from "mongoose";

type Tweet = {
  content: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const tweetSchema = new mongoose.Schema<Tweet>({
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const TweetModel = mongoose.model<Tweet>("Tweet", tweetSchema);
export default TweetModel;
