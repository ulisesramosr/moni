'use strict';

const { graphql, buildSchema } = require('graphql');

//1.- Se define un type Video que es un objeto
// y luego se define un typo query
const schema = buildSchema(`
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }

  type Query {
    video: Video
  }

`);

//2.- se cambia el resolver
const resolver = {
    video: () => ({
      id: '1',
      title: 'Hello world!',
      duration: 180,
      watched: true
    })
  };

//3.- generamos la query
//Nota probar que pasa si eliminamos title
const query = `
query MiQueryDeVideo {
  video {
    id,
    title,
    watched
  }
}`

graphql(schema, query, resolver)
  .then((response) => { console.log(response)})
  .catch((error) => {error});


