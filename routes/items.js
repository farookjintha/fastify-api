let items = require('../data/Item');

function itemRoutes(fastify, options, done){

    fastify.get('/items', (request, reply) => {
        reply.send({items})
    })
    
    fastify.get('/items/:id', (request, reply) => {
        const {id} = request.params;
        const item = items.find(i => i.id = id);
    
        reply.send({item});
    })

    done();
}

module.exports = itemRoutes;