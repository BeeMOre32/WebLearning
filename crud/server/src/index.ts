import express, { Express, Request, Response } from "express";
import tweetRouter from "./router/tweet";
import userRouter from "./router/user";
import dotenv from "dotenv";
import mongoose from "mongoose";

import cors from "cors";

const app: Express = express();
const port = 3000;

app.use(cors(), express.json(), tweetRouter, userRouter);

dotenv.config();

const url = process.env.MONGO_URL as string;
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB with Mongoose");
});

app.get("/", async (req: Request, res: Response) => {
  res.send("");
});

app.listen(port, () => {
  console.log("server is running on port 3000");

  console.log(`[server]: Server is running at http://localhost:${port}`);
});
