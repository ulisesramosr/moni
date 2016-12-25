'use strict';

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

const getOwner = new Promise((resolve) => resolve(owner))
const getVideos = new Promise((resolve) => resolve(videos))

exports.getOwner = getOwner
exports.getVideos = getVideos
