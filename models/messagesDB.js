import { v4 as uuid } from "uuid";

const messages = [
    {
        text: "Hey! Are you free this weekend?",
        user: "Bruce",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Guess what? I aced my exam!",
        user: "Clark",
        added: new Date(),
        id: uuid()
    },
    {   
        text: "Just having one of those days, you know? Let's grab coffee and talk it out.",
        user: "Diana",
        added: new Date(),
        id: uuid()
    },
    {
        text: "This is 🔥! Thank you!",
        user: "John",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Don't worry, we all have those stories. It's what makes life interesting!",
        user: "Christine",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Just saw your favorite band is coming to town! We have to get tickets ASAP!",
        user: "Joanna",
        added: new Date(),
        id: uuid()
    },
    {
        text: "How was your day?",
        user: "Bruce",
        added: new Date(),
        id: uuid()
    },
    {
        text: "I'm on it. Front row seats, here we come!",
        user: "Peter",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Great, how was yours?",
        user: "Clark",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Need some advice. Can we chat?",
        user: "Miranda",
        added: new Date(),
        id: uuid()
    },
    {
        text: "Guess who I bumped into today?",
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