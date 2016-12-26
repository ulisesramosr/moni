'use strict';

const data11 = {id:'d11', timestamp:'1', value: 11}
const data12 = {id:'d12', timestamp:'2', value: 12}
const dataList01 = [data11, data12]

const tag01 = {
  id: '01',
  name: 'tag01',
  description: 'this is a dummy data tag 01',
  timezone: null,
  confParams:'{"device":"0","ip":"127.0.0.1"}',
  dataUnits: 'ºC',
  dataList: dataList01
}



const data21 = {id:'d21', timestamp:'1', value: 21}
const data22 = {id:'d22', timestamp:'2', value: 22}
const dataList02 = [data21, data22]

const tag02 = {
  id: '02',
  name: 'tag02',
  description: 'this is a dummy data tag 02',
  timezone: null,
  confParams:'{"device":"0","ip":"127.0.0.2"}',
  dataUnits: 'm',
  dataList: dataList02
}

/*
const tag03 = {
  id: '03',
  name: 'tag03',
  description: 'this is a dummy data tag 03',
  timezone: null,
  confParams:'{"device":"0","ip":"127.0.0.3"}',
  dataList:null
}
*/

const tags = [tag01, tag02]

const getTags = new Promise((resolve) => resolve(tags))

/*
const createVideo = ({title, duration, watched}) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration,
    watched
  }
  videos.push(video)
  return video
}

*/

exports.getTags = getTags

/*exports.createVideo = createVideo*/
