const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const {getOwner, getVideos} = require('./data.js');

const ownerType = new GraphQLObjectType({
  name: 'Owner',
  description:'Dueño de las pelis',
  fields:{
    id: {
      type: GraphQLID,
      description: "id of owner"
    },
    name: {
      type: GraphQLString,
      description: 'name of owner'
    },
    age: {
      type: GraphQLInt,
      description: 'Owner\'s age'
    }
  }
})

const videoType = new GraphQLObjectType({
  name: 'Video',
  description:'Datos de la película',
  fields:{
    id:{
      type: GraphQLID,
      description: 'movie\'s id'
    },
    title:{
      type: GraphQLString,
      description: 'movie\'s title'
    },
    duration:{
      type: GraphQLInt,
      description: 'movie\'s duration'
    },
    watched:{
      type: GraphQLBoolean,
      description: 'Is watched this movie?'
    }
  }
})

const queryType = new GraphQLObjectType({
  name: "Query",
  description: 'the root query type. A GraphQL object that contains them all!!',
  fields: {
    owner: {
      type: ownerType
    },
    videos:{
      type: new GraphQLList(videoType)
    }
  }
})


const schema = new GraphQLSchema({
  query: queryType
})

//2.- creacion de objetos y arreglos


//3.- Se define un resolver
const resolver = {
    owner: () => getOwner.then((owner) => {
        console.log("owner:" + owner)
        return owner
    }),
    videos: () => getVideos.then((videos) => {
        console.log("videos:" + videos)
        return videos
    })
  };


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
