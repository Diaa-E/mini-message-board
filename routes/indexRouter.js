import { Router } from "express";
import CustomNotFoundError from "../error/customNotFoundError.js";
import { addNewMessage, getAllMessages } from "../controllers/messagesController.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages)
.get("/new", (req, res) => {

    res.render("newForm");
})
.post("/new", addNewMessage)
.get("/{*splat}", (req, res) => {

    throw new CustomNotFoundError("Page Not Found");
});

export default indexRouter;