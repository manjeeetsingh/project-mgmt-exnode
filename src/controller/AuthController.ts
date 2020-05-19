import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/User";
import bcrypt from "bcryptjs";
import logger from "../Logger";
import jwt from "jsonwebtoken";
export class AuthController {
  static secretkey: string = "mysecret";
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const hashedPwd = await bcrypt.hash(req.body.password, 12);
      const savedUser = await new User({
        fname: req.body.fname,
        lname: req.body.fname,
        email: req.body.email,
        password: hashedPwd,
      }).save();
      return res.status(201).json(savedUser);
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const isEqual: boolean = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isEqual) {
        const token = jwt.sign(
          { email: user.email, userId: user._id },
          AuthController.secretkey,
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .json({ message: "loging success", token: token, user: user });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } else {
      res.status(401).json({ message: "Invalid user" });
    }
  }
  static isAuth(req: Request, res: Response, next: NextFunction) {
    const authtHead = req.get("Authorization");
    if (authtHead) {
      const token = authtHead.split(" ")[1];
      const decodedToken = jwt.verify(token, AuthController.secretkey);
      if (decodedToken) {
        next();
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
}
