const { v4: uuidv4 } = require('uuid')
let items = require('../data/Item');

const getItems = (request, reply) => {
    reply.send(items)
}

const getItem = (request, reply) => {
    const {id} = request.params;

    const item = items.find((item) => item.id === id);

    reply.send(item);
}

const addItem = (request, reply) => {
    const {name} = request.body;
    const item = {
        id : uuidv4(),
        name
    }

    items = [...items, item]

    reply.code(201).send(item);
}

const deleteItem = (request, reply) => {
    const {id} = request.params;

    items = items.filter((item) => item.id !== id);

    reply.send({message: `Item ${id} has been removed.`});
}

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem
}