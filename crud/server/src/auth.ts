import jwt from "jsonwebtoken";
import { JWT_SECRET } from ".";
import { User } from "./schema/user";
import { Request, Response, NextFunction } from "express";

export const generateJWT = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.user = decoded;
    next();
  } catch (error) {
    res.status(401).send("Token is not valid");
  }
};
