import axios from 'axios'
require('dotenv').config()

export function getSearchRes(query) {
  return axios.get(`http://localhost:5000/search?q=${query}`)
}

export function getSong(songId) {
  return axios.get(`http://localhost:5000/song?id=${songId}`)
}
