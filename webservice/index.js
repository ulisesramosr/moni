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

const {getOwner, getVideos, createVideo} = require('./data.js');


//define los tipos
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


//define un tipo mutation pra la insertar un vídeo
const createVideoMutationType = new GraphQLObjectType({
  name: 'createVideoMutation',
  description: 'Tipo "mutation" para la creación de un dueño',
  fields:{
    createVideo:{
      type: videoType,
      description: 'Crea una nueva peli',
      args:{
        title: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Movie\'s title'
        },
        duration: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Movie\'s duration'
        },
        watched: {
          type: GraphQLBoolean,
          description: 'is movie watched by owner?'
        }
      },
      resolve: (_, args) => {
        return createVideo(args);
      }
    }
  }
})


//2.- define el esquema
const schema = new GraphQLSchema({
  query: queryType,
  mutation: createVideoMutationType
})


//3.- Se define un resolver
const resolver = {
    owner: () => getOwner.then((owner) => owner),
    videos: () => getVideos.then((videos) =>  videos)
  };


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
