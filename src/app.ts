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
import authRoutes from "./routes/authRoutes";
import { Database } from "./Database";

const app: Application = expresss();

app.use(bodyParser.json());
app.use(expresss.static(path.join(__dirname, "public")));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to Project Management");
});
app.use(authRoutes);
const mongooseConnection = mongoose
  .connect(
    "mongodb+srv://manjeet:tm3l3lJWzc9lcZXD@cluster0-i9fi8.mongodb.net/projectmgmt?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then((result) => {
    if (result) {
      Database.init();
    }
    app.listen("5000", () => {
      logger.info("server is running");
    });
  })
  .catch((error) => {
    logger.error(error);
  });
