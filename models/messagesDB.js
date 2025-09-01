import { v4 as uuid } from "uuid";

const messages = [
    {
        text: "Message 1",
        user: "Bruce",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Message 2",
        user: "Clark",
        added: new Date(),
        id: uuid()
    },
    {   
        text: "Message 3",
        user: "Diana",
        added: new Date(),
        id: uuid()
    }
];

async function getAllMessages()
{
    return [...messages];
}

async function addNewMessage(message, user, date)
{
    messages.push({ text: message, user: user, added: date, id: uuid() });
}

async function getMessageById(id)
{
    return messages.find(message => String(message.id) === String(id));
}

const messagesDB = {

    getAllMessages: getAllMessages,
    addNewMessage: addNewMessage,
    getMessageById: getMessageById,
};

export default messagesDB;