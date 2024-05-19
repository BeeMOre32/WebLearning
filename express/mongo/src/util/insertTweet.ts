import TweetModel from "../schema/tweet";
import mongoose from "mongoose";

export async function insertTweetOne() {
  try {
    const newTweet = new TweetModel({
      content: "Hello World",
      userId: "1234",
      createdAt: new Date(),
      updatedAt: new Date(),
      _id: "1",
    });

    const tweet = await newTweet.save();

    console.log("tweet saved :" + tweet);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}
