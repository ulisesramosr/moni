'use strict';

const { graphql, buildSchema } = require('graphql');

//1.- Se define mantiene el tipo video
//pero se agrega una propiedad nueva a Query
const schema = buildSchema(`
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }

  type Query {
    video: Video
    videos: [Video]
  }

`);


//2.- creacion de objetos y arreglos
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
    video: () => ({
      id: '1',
      title: 'Hello world!',
      duration: 180,
      watched: true
    }),
    videos: () => videos
  };

//3.- generamos la query
//Nota probar que pasa si eliminamos title
const query = `
query MiQueryDeVideo {
  videos{
    title,
    watched
  }
}`

//4.- ejecuta el llamado
// probar línea comentada
graphql(schema, query, resolver)
  //.then((response) => { console.log(response)})
  .then((response) => { console.log(response.data.videos[0])})
  .catch((error) => {error});


