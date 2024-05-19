import TweetModel from "../schema/tweet";

async function insertTweet() {
  const tweet = new TweetModel({
    content: "Fake Tweet",
    userId: "6649c64d05b880cde4f2bbad",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const savedTweet = await tweet.save();

  console.log(savedTweet);
}

export default insertTweet;
