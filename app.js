import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import __dirname from "./__dirname.js";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use((err, req, res, next) => {

    console.error(err);
    res.status(err.status || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {

    if (error)
    {
        throw error;
    }
});