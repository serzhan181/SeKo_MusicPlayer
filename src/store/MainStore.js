import { makeAutoObservable } from 'mobx'

class Audio {
  constructor() {
    makeAutoObservable(this)
  }

  songs = [
    {
      id: 1,
      songURL: 'assets/music.mp3',
      img: 'https://i1.sndcdn.com/artworks-000018959670-927tgn-t500x500.jpg',
      title: 'Maruno Title',
      author: 'Kample Beat',
    },
    {
      id: 2,
      songURL: 'assets/brokebitch.mp3',
      img:
        'https://i1.sndcdn.com/artworks-ymhEZDDLyNzBG2Nv-2H672g-t500x500.jpg',
      title: 'Broke Bitch',
      author: 'Pure Luxury',
    },
    {
      id: 3,
      songURL: 'http://streaming.tdiradio.com:8000/house.mp3',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kwcT0FMG8RvOdjUh_B3OPQHaFj%26pid%3DApi&f=1',
      title: 'House MP3',
      author: 'autotune',
    },
  ]

  playing = null

  isPlaying = false

  setIsPlaying = () => {
    this.isPlaying = !this.isPlaying
  }

  setSong = (songData) => {
    this.playing = songData
    this.isPlaying = true
  }

  setNextSong = (curSongIdx) => {
    const songById = this.songs.find((s) => s.id === curSongIdx)
    const idxInArr = this.songs.indexOf(songById)

    let nextSong

    if (idxInArr === this.songs.length - 1) nextSong = this.songs[0]
    else nextSong = this.songs[idxInArr + 1]

    this.playing = { ...nextSong }
  }

  setPrevSong = (curSongIdx) => {
    const songById = this.songs.find((s) => s.id === curSongIdx)
    const idxInArr = this.songs.indexOf(songById)

    let prevSong

    if (idxInArr === 0) prevSong = this.songs[this.songs.length - 1]
    else prevSong = this.songs[idxInArr - 1]

    this.playing = { ...prevSong }
  }
}

export const audio = new Audio()
window.audio = audio
