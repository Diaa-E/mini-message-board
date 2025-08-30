import { Router } from "express";

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
    .get("/{*splat}", (req, res) => {

        throw new Error();
    });

export default indexRouter;