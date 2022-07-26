const fastify = require('fastify')({logger: true});
fastify.register(require('./routes/items'))
const PORT = process.env.PORT || 5000;


fastify.get('/', (request, reply) => {
    reply.send({test: "Hello"})
})



const start = async () => {
    try{
        await fastify.listen(PORT)
    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}

start();