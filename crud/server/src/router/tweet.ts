import express, { Request, Response } from "express";
import TweetModel from "../schema/tweet";
import UserModel from "../schema/user";

const router = express.Router();

router
  .route("/tweet")
  .get(async (req: Request, res: Response) => {
    console.log("GET /tweet");

    const data = await TweetModel.find().populate("userId");
    res.send(data);
  })
  .post(async (req: Request, res: Response) => {
    const data = await TweetModel.create({
      content: req.body.text,
      userId: req.body.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log("POST /tweet" + data);

    res.send(data);
  });

router
  .route("/tweet/:id")
  .get((req: Request, res: Response) => {
    res.send(`Fake Tweet ${req.params.id}`);
  })
  .put(async (req: Request, res: Response) => {
    const { text } = req.body;
    const { id } = req.params;

    const data = await TweetModel.findByIdAndUpdate(id, {
      content: text,
      updatedAt: new Date(),
    });

    console.log("PUT /tweet/" + id + " " + data);

    res.send(data);
  })
  .delete(async (req: Request, res: Response) => {
    const { id } = req.params;

    const data = await TweetModel.findByIdAndDelete(id);
    console.log("DELETE /tweet/" + id + " " + data);

    res.send(data);
  });

export default router;
