import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {

        res.render("index");
    })
    .get("/{*splat}", (req, res) => {

        throw new Error();
    });

export default indexRouter;