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

  isPlayingId = null

  setIsPlaying = (id) => {
    if (this.isPlayingId !== null) {
      this.isPlayingId = null
    } else this.isPlayingId = id
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

  loadedSongId = null
  setIsSongLoaded = (id) => {
    if (this.loadedSongId !== null) this.loadedSongId = null
    else this.loadedSongId = id
  }

  haveSongsLoaded = true
  setHaveSongsLoaded = () => {
    runInAction(() => {
      this.haveSongsLoaded = !this.haveSongsLoaded
    })
  }
  searchQuery = ''

  setSongsOnSearch = async (query) => {
    if (query !== this.searchQuery) {
      this.setHaveSongsLoaded()
      runInAction(() => {
        this.searchQuery = query // needed, cuz component renders several times and server recives several requests.
      })

      const res = await getSearchRes(query)
      const parsedSongs = parseSongs(res.data)
      runInAction(() => {
        this.songs = parsedSongs
      })
      this.setHaveSongsLoaded()
      return
    }

    return
  }

  songHasBeenSetId = null

  checkSongHasBeenSet = (songId) => {
    if (this.songHasBeenSetId === songId) {
      this.setIsPlaying(songId)
      return 'set'
    } else {
      this.songHasBeenSetId = songId
      return null
    }
  }

  setSong = async (songData) => {
    this.setIsSongLoaded(songData.id)

    const { id } = songData
    let songURL
    try {
      songURL = await getSong(id)
    } catch (error) {
      console.log('ERROR', error)
      return window.location.replace('/error')
    }

    runInAction(() => {
      this.playing = {
        title: songData.title,
        author: songData.author,
        img: songData.img,
        id,
        songURL: songURL.data,
      }
    })

    this.setIsSongLoaded(songData.id)

    document.title = songData.title

    runInAction(() => {
      this.isPlayingId = id
    })
  }
}

export const audio = new Audio()
window.audio = audio
