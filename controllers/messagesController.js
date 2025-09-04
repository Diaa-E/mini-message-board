import CustomNotFoundError from "../error/customNotFoundError.js";
import messagesDB from "../models/messagesDB.js";
import { convertMs } from "../utils/timeConverter.js";
import { body, validationResult } from "express-validator";

async function getAllMessages(req, res)
{
    const messages = await messagesDB.getAllMessages();

    if (!messages)
    {
        throw new CustomNotFoundError("No Messages Available.");
    }

    res.render("index", { messages: messages, convertMs: convertMs });
}

async function getMessageById(req, res)
{
    const { id } = req.params;

    const message = await messagesDB.getMessageById(id);

    if (!message)
    {
        throw new CustomNotFoundError("Message not Found");
    }

    res.render("messageDetails", { message: message });
}

async function addNewMessageHandler(req, res)
{
    const errors = validationResult(req);

    if (!errors.isEmpty())
    {
        return res.status(400).render("newForm", { errors: errors.array() });
    }

    const { user, message } = req.body;

    if (!user || !message)
    {
        throw new Error();
    }

    await messagesDB.addNewMessage(message, user, new Date());
    res.redirect("/");
}

const validateNewMEssage = [

    body("user").trim().notEmpty()
    .isAlpha().withMessage(`Sender must contain only letters.`)
    .isLength({ min: 2, max: 15 }).withMessage("Sender must be between 2 and 15 characters in length."),
    body("message").trim().notEmpty()
];

const addNewMessage = [

    validateNewMEssage,
    addNewMessageHandler,
]

export {

    getAllMessages,
    addNewMessage,
    getMessageById
};