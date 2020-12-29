import { makeAutoObservable, runInAction } from 'mobx'
import { getSearchRes, getSong } from '../api/youtubeAPI'
import { parseSongs } from '../helpers/parseSongs'

class Audio {
  constructor() {
    makeAutoObservable(this)
  }

  // Song related

  songs = []

  playing = null

  isPlaying = false

  setIsPlaying = () => {
    this.isPlaying = !this.isPlaying
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

  // Song related (async)

  isSongLoaded = true

  setIsSongLoaded = () => (this.isSongLoaded = !this.isSongLoaded)

  searchQuery = ''

  setSongsOnSearch = async (query) => {
    if (query !== this.searchQuery) {
      runInAction(() => {
        this.searchQuery = query // needed, cuz component renders several times and server recives several requests.
      })

      const res = await getSearchRes(query)
      const parsedSongs = parseSongs(res.data)
      runInAction(() => {
        this.songs = parsedSongs
      })
      return
    }
    console.log('THE SAME QUERY')
    return
  }

  setSong = async (songData) => {
    this.setIsSongLoaded()

    const { id } = songData
    const songURL = await getSong(id)

    runInAction(() => {
      this.playing = {
        title: songData.title,
        author: songData.author,
        img: songData.img,
        id,
        songURL: songURL.data,
      }
    })

    this.setIsSongLoaded()

    runInAction(() => {
      this.isPlaying = true
    })
  }
}

export const audio = new Audio()
window.audio = audio
