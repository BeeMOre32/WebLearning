import express, { Express, Request, Response } from "express";
import tweetRouter from "./router/tweet";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const url = process.env.MONGO_URL as string;
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB with Mongoose");
});

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server ");
});

app.listen(port, () => {
  console.log("server is running on port 3000");

  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(tweetRouter);
