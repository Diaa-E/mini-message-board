import { Router } from "express";
import CustomNotFoundError from "../error/customNotFoundError.js";
import { getAllMessages, getMessageById } from "../controllers/messagesController.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages)
.get("/:id", getMessageById)
.route("/{*splat}", (req, res) => {

    throw new CustomNotFoundError("Page Not Found");
});

export default indexRouter;