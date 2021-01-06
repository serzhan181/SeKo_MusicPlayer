import axios from 'axios'
require('dotenv').config()

export function getSearchRes(query) {
  return axios.get(`https://musiicplayer-api.herokuapp.com/search?q=${query}`)
}

export function getSong(songId) {
  return axios.get(`https://musiicplayer-api.herokuapp.com/song?id=${songId}`)
}

// export function tryit(q) {
//   return axios.get(
//     `https://customsearch.googleapis.com/customsearch/v1?cx=0898ad9d8c1dd26af&exactTerms=${q}&key=AIzaSyDhRAANEW8UcgrNzasNrhxGLLBvm2zSXfg`
//   )
// }
