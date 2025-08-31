const messages = [
    {
        text: "Message 1",
        user: "Bruce",
        added: new Date()
    },
    {
        text: "Message 2",
        user: "Clark",
        added: new Date()
    },
    {   
        text: "Message 3",
        user: "Diana",
        added: new Date()
    }
];

async function getAllMessages()
{
    return [...messages];
}

async function addNewMessage(message, user, date)
{
    messages.push({ text: message, user: user, added: date });
}

const messagesDB = {

    getAllMessages: getAllMessages,
    addNewMessage: addNewMessage
};

export default messagesDB;