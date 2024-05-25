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
  .post((req: Request, res: Response) => {
    req.body.text = "Fake Tweet created";
    const date = new Date();

    res.send("Fake Tweet created" + date);
  });

router
  .route("/tweet/:id")
  .get((req: Request, res: Response) => {
    res.send(`Fake Tweet ${req.params.id}`);
  })
  .put((req: Request, res: Response) => {
    res.send(`Fake Tweet ${req.params.id} updated`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Fake Tweet ${req.params.id} deleted`);
  });

export default router;
