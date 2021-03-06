const fastify = require('fastify');

const app = fastify({ logger: true });

// Declare a route
app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

app.register('/api/users', require('./routes/users'));

module.exports = app;
