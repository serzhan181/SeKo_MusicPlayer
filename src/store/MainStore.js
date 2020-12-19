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
}

export const audio = new Audio()
window.audio = audio
