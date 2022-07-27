const {getItems, getItem, addItem, deleteItem} = require('../controller/items')

const Item = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    }
}

const getItemsOpts = {
    schema: {
        response: {
            200 : {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string'
                        },
                        name: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    },
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200 : Item
        }
    },
    handler: getItem
}

const postItemOpts = {
    schema: {
        body:{
            type: 'object',
            required: ['name'],
            properties: {
                name: {
                    type: 'string'
                }
            }
        },
        response: {
            201 : Item
        }
    },
    handler: addItem
}

const deleteItemOpts = {
    schema: {
        response: {
            200 : {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            }
        }
    },
    handler: deleteItem
}

function itemRoutes(fastify, options, done){

    fastify.get('/items', getItemsOpts);
    
    fastify.get('/items/:id', getItemOpts);

    fastify.post('/items', postItemOpts);

    fastify.delete('/items/:id', deleteItemOpts);



    done();
}

module.exports = itemRoutes;