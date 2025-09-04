import { Router } from "express";
import { addNewMessage } from "../controllers/messagesController.js";

const newRouter = Router();

newRouter.get("/", (req, res) => {

    res.render("newForm", { errors: [] });
})
.post("/", addNewMessage);

export default newRouter;