import { getTweets } from "./getTweet";
import { createTweet } from "./util/tweets";

const tweetInput = document.querySelector(
  ".main-tweet__input input"
) as HTMLInputElement;

const tweetButton = document.querySelector(
  ".main-tweet__input button"
) as HTMLButtonElement;

tweetButton.addEventListener("click", async () => {
  const text = tweetInput.value;
  const userId = "6649c64d05b880cde4f2bbad";

  console.log(text, userId);
  const result = await createTweet({ text, userId });
  if (result) {
    tweetInput.value = "";
    getTweets();
  }
});
