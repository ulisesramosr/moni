var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Una vez que se levanta el servidor se puede utilizar el siguiente comando
// desde el terminal:
// curl -XPOST -d '{hello}' -H 'Content-Type:application/graphql' http://localhost:4000/graphql

var resolver = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
