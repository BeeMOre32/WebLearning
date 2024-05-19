import express, { Request, Response } from "express";
import UserModel from "../schema/user";

const router = express.Router();

router
  .route("/user/:id")
  .get(async (req: Request, res: Response) => {
    const user = await UserModel.find({ _id: req.params.id });
    res.send(user);
  })
  .put((req: Request, res: Response) => {
    res.send(`Fake Tweet ${req.params.id} updated`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Fake Tweet ${req.params.id} deleted`);
  });

export default router;
