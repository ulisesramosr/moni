'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }
`);

//Notar que es posible ponerle un nombre a nuestra query
const query = `
query myFirstQuery {
  id
  title
  watched
}`

const resolver = {
    id: () => '1',
    title: () => 'Hello world!',
    duration: ()=> 180,
    watched: ()=> true
  };

graphql(schema, query, resolver)
  .then((response) => { console.log(response)})
  .catch((error) => {error});


