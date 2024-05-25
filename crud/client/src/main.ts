import "./style.css";
import "./createTweet";
import "./getTweet";

const test = async () => {
  const data = await fetch("http://localhost:3000/tweet");
  const tweets = await data.json();

  console.log(tweets);
};

test();
