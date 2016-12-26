const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const {getTags} = require('./dataManager.js');


//define los tipos
const acqDataType = new GraphQLObjectType({
  name: 'acqData',
  description:'Acquire data from tag',
  fields:{
    id:{
      type: GraphQLID,
      description: 'ID of acqData'
    },
    timestamp:{
      type: GraphQLInt,
      description: 'Timestamp of acqData'
    },
    value:{
      type: GraphQLFloat,
      description: 'value of acqData'
    },
    /*
    idTag:{
      type: GraphQLID,
      description: 'id of asociated Tag'
    }
    */
  }
})

const tagType = new GraphQLObjectType({
  name: 'tag',
  description:'Acquisition Tag info type',
  fields:{
    id: {
      type: GraphQLID,
      description: "id of tag"
    },
    name: {
      type: GraphQLString,
      description: 'name of tag'
    },
    description: {
      type: GraphQLString,
      description: 'description of tag'
    },
    timezone: {
      type: GraphQLString,
      description: 'timezone of acquisition tag'
    },
    confParams: {
      type: GraphQLString,
      description: 'configuration parameters of tag in JSON'
    },
    dataUnits: {
      type: GraphQLString,
      description: 'units used by tag'
    },
    dataList:{
      type: new GraphQLList(acqDataType),
      description:'List with acquired data'
    }
  }
})


const queryType = new GraphQLObjectType({
  name: "Query",
  description: 'the root query type. A GraphQL object that contains them all!!',
  fields: {
    tags: {
      type: new GraphQLList(tagType),
      description: 'tag with data acquire',
      resolve: () =>  getTags.then((tags) => tags)
    }
  },
})


//define un tipo mutation pra la insertar un vídeo
/*
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

*/

//2.- define el esquema
const schema = new GraphQLSchema({
  query: queryType,
  /*mutation: createVideoMutationType*/
})

//getTags.then((tags) => console.log(tags))

//3.- Se define un resolver
/*
const resolver = {
    tags: () => getTags.then((tags) => {
      console.log(tags)
      return tags
    }),
    videos: () => getVideos.then((videos) =>  videos)
  };
*/
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
