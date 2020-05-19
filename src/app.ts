import expresss, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import logger from "./Logger";
const app: Application = expresss();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expresss.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to Project Management");
});
mongoose
  .connect(
    "mongodb+srv://manjeet:tm3l3lJWzc9lcZXD@cluster0-i9fi8.mongodb.net/projectmgmt?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen("5000", () => {
      logger.info("server is running");
    });
  })
  .catch((error) => {
    logger.error(error);
  });
