import CustomNotFoundError from "../error/customNotFoundError.js";
import messagesDB from "../models/messagesDB.js";

async function getAllMessages(req, res)
{
    const messages = await messagesDB.getAllMessages();

    if (!messages)
    {
        throw new CustomNotFoundError("No Messages Available.");
    }

    res.render("index", { messages: messages });
}

async function addNewMessage(req, res)
{
    const { user, message } = req.body;

    if (!user || !message)
    {
        throw new Error();
    }

    await messagesDB.addNewMessage(message, user, new Date());
    res.redirect("/");
}

export {

    getAllMessages,
    addNewMessage
};