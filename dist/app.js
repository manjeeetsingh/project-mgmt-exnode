"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const Logger_1 = __importDefault(require("./Logger"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.get("/", (req, res, next) => {
    res.send("Welcome to Project Management");
});
app.use(authRoutes_1.default);
mongoose_1.default
    .connect("mongodb+srv://manjeet:tm3l3lJWzc9lcZXD@cluster0-i9fi8.mongodb.net/projectmgmt?retryWrites=true&w=majority")
    .then((result) => {
    app.listen("5000", () => {
        Logger_1.default.info("server is running");
    });
})
    .catch((error) => {
    Logger_1.default.error(error);
});
