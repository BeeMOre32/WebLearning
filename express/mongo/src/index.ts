import express, { Express, Request, Response } from "express";
import tweetRouter from "./router/tweet";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

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

dotenv.config();

const uri = process.env.MONGO_URL || "";
console.log("uri", uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
