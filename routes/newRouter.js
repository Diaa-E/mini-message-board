import { Router } from "express";
import { addNewMessage } from "../controllers/messagesController.js";
import CustomNotFoundError from "../error/customNotFoundError.js";

const newRouter = Router();

newRouter.get("/", (req, res) => {

    res.render("newForm", { errors: [] });
})
.post("/", addNewMessage)
.all("/{*splat}", (req, res) => {

    throw new CustomNotFoundError("Page Not Found");
});

export default newRouter;