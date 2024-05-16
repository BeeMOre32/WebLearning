import "./style.css";
import { getTweets } from "./getTweet";

getTweets();

const number = 1;
const string = "hello";
const boolean = true;
const array = [1, 2, 3];
const tuple = [1, "hello"];
const object = { key: "value" };

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(1, 2);
// const resultError = sum(1, "2");
