import { v4 as uuid } from "uuid";

const messages = [
    {
        text: "Hey! Are you free this weekend?",
        user: "Bruce",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "Guess what? I aced my exam!",
        user: "Clark",
        added: generateRandomDate(),
        id: uuid()
    },
    {   
        text: "Just having one of those days, you know? Let's grab coffee and talk it out.",
        user: "Diana",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "This is 🔥! Thank you!",
        user: "John",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "Don't worry, we all have those stories. It's what makes life interesting!",
        user: "Christine",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "Just saw your favorite band is coming to town! We have to get tickets ASAP!",
        user: "Joanna",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "How was your day?",
        user: "Bruce",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "I'm on it. Front row seats, here we come!",
        user: "Peter",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "Great, how was yours?",
        user: "Clark",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "Need some advice. Can we chat?",
        user: "Miranda",
        added: generateRandomDate(),
        id: uuid()
    },
    {
        text: "Guess who I bumped into today?",
        user: "Diana",
        added: generateRandomDate(),
        id: uuid()
    }
];

function generateRandomDate()
{
    const lowerMs = (new Date("2025-01-01")).getTime();
    const upperMs = (new Date()).getTime();

    return new Date(Math.floor((Math.random() * (upperMs - lowerMs))) + lowerMs);
}

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