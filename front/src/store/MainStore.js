import { makeAutoObservable } from 'mobx'
import { getSearchRes, getSong } from '../api/youtubeAPI'
import { parseSongs } from '../helpers/parseSongs'

class Audio {
  constructor() {
    makeAutoObservable(this)
  }

  songs = [
    {
      id: 'v5ybdpttu40',
      img: 'https://i.ytimg.com/vi/v5ybdpttu40/hqdefault.jpg',
      title: 'Yung Bans - Partna in Crime (Dir. by @_ColeBennett_)',
      author: 'Young Bans',
    },
  ]

  setSongsOnSearch = async (query) => {
    const res = await getSearchRes(query)
    const parsedSongs = parseSongs(res.data)
    this.songs = parsedSongs
  }

  playing = null

  isPlaying = false

  setIsPlaying = () => {
    this.isPlaying = !this.isPlaying
  }

  setSong = async (songData) => {
    const { id } = songData
    const songURL = await getSong(id)
    this.playing = {
      title: songData.title,
      author: songData.author,
      img: songData.img,
      id,
      songURL: songURL.data,
    }
    this.isPlaying = true
  }

  setNextSong = (curSongIdx) => {
    const idxInArr = this.songs.findIndex((s) => s.id === curSongIdx)

    let nextSong

    if (idxInArr === this.songs.length - 1) nextSong = this.songs[0]
    else nextSong = this.songs[idxInArr + 1]

    this.playing = { ...nextSong }
  }

  setPrevSong = (curSongIdx) => {
    const idxInArr = this.songs.findIndex((s) => s.id === curSongIdx)

    let prevSong

    if (idxInArr === 0) prevSong = this.songs[this.songs.length - 1]
    else prevSong = this.songs[idxInArr - 1]

    this.playing = { ...prevSong }
  }
}

export const audio = new Audio()
window.audio = audio
