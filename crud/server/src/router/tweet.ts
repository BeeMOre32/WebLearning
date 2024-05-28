import express, { Request, Response } from "express";
import TweetModel from "../schema/tweet";
import UserModel from "../schema/user";
import { verifyJWT } from "../auth";

const router = express.Router();
router
  .route("/tweet")
  .get(async (req: Request, res: Response) => {
    console.log("GET /tweet");

    const data = await TweetModel.find().populate("userId");
    res.send(data);
  })
  .post(verifyJWT, async (req: Request, res: Response) => {
    const { text } = req.body;
    const { _id } = req.body.user;

    const data = await TweetModel.create({
      content: text,
      userId: _id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

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
