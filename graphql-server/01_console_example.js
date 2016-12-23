var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var query = '{ hello }'

var resolver = { hello: () => 'Hello world!' };

graphql(schema, query, resolver)
  .then((response) => { console.log(response)})
  .catch((error) => {error});


