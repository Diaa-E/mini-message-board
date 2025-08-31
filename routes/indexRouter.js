import { Router } from "express";
import CustomNotFoundError from "../error/customNotFoundError.js";
import { getAllMessages } from "../controllers/messagesController.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages)
.get("/{*splat}", (req, res) => {

    throw new CustomNotFoundError("Page Not Found");
});

export default indexRouter;