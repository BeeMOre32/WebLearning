import express, { Express, Request, Response } from "express";
import tweetRouter from "./router/tweet";

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
