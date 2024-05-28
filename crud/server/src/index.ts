import express, { Express, Request, Response } from "express";
import tweetRouter from "./router/tweet";
import userRouter from "./router/user";
import dotenv from "dotenv";
import mongoose from "mongoose";

import cors from "cors";
import UserModel from "./schema/user";
import bcrypt from "bcryptjs";
import { generateJWT } from "./auth";

const app: Express = express();
const port = 3000;

app.use(cors(), express.json(), tweetRouter, userRouter);
dotenv.config();

const url = process.env.MONGO_URL as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB with Mongoose");
});

app.get("/", async (req: Request, res: Response) => {
  res.send("");
});

app.post("/register", async (req: Request, res: Response) => {
  const { name, username, nickname, password } = req.body;

  try {
    let user = await UserModel.findOne({ username });
    if (user) {
      return res.status(400).send("User already exists");
    }

    user = new UserModel({ name, username, nickname, password });
    await user.save();

    res.send({
      name: user.name,
      username: user.username,
      nickname: user.nickname,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    let user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = generateJWT(user);
    console.log("login success token is", token);

    res.send({
      token,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log("server is running on port 3000");
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
