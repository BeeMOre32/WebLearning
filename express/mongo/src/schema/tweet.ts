import mongoose from "mongoose";

type Tweet = {
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
};

const tweetSchema = new mongoose.Schema<Tweet>({
  content: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  _id: { type: String, required: true },
});

const TweetModel = mongoose.model<Tweet>("Tweet", tweetSchema);
export default TweetModel;
