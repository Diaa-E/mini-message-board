import { Router } from "express";
import CustomNotFoundError from "../error/customNotFoundError.js";

const indexRouter = Router();

const messages = [
    {
        text: "Message 1",
        user: "Bruce",
        added: new Date()
    },
    {
        text: "Message 2",
        user: "Clark",
        added: new Date()
    },
    {   
        text: "Message 3",
        user: "Diana",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {

    res.render("index", { messages: messages });
})
.get("/new", (req, res) => {

    res.render("newForm");
})
.post("/new", (req, res) => {

    const { message, user } = req.body;
    messages.push({ text: message, user: user, added: new Date() });
    res.redirect("/");
})
.get("/{*splat}", (req, res) => {

    throw new CustomNotFoundError("Page Not Found");
});

export default indexRouter;