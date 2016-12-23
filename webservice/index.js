var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`

  type Owner {
    id: ID,
    name: String,
    age: Int
  }

  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }

  type Query {
    owner: Owner
    videos: [Video]
  }
`);

//2.- creacion de objetos y arreglos
const owner = {
  id: '1',
  name: 'Chillanejo',
  age: 35
}

const videoA = {
  id: '2',
  title: 'Cementerio pal pito 1',
  duration: 69,
  watched: true
}

const videoB = {
  id: '3',
  title: 'Cementerio pal pito 2',
  duration: 44,
  watched: true
}

const videoC = {
  id: '4',
  title: 'Cementerio pal pito 3',
  duration: 72,
  watched: false
}
const videos = [videoA, videoB, videoC]

//3.- Se define un resolver
const resolver = {
    owner: () => owner,
    videos: () => videos
  };


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
