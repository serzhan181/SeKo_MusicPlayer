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
    {
      id: 4,
      songURL:
        'https://r2---sn-5auxa-5a5e.googlevideo.com/videoplayback?expire=1608825124&ei=xGTkX8LKEIK9yQX39JTIBw&ip=176.64.34.75&id=o-AJHGul9acgQllIUV7JeSd0lLzW4dnClZJrSQDn2vbSgY&itag=140&source=youtube&requiressl=yes&mh=2o&mm=31%2C29&mn=sn-5auxa-5a5e%2Csn-ug5onuxaxjvh-n8vs&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=212500&vprv=1&mime=audio%2Fmp4&ns=Fyw_tyo9a6qD2e3jpsI1l5IF&gir=yes&clen=3010026&dur=185.945&lmt=1606286379998300&mt=1608803081&fvip=2&keepalive=yes&c=WEB&txp=5511222&n=OJv5IyJE1Na0zfCf&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgWIfSt7EezbBdyGzg2_K5R81dDOizDsoLsPMyrLVzu7UCIQDQGn89agE1lCZULYoPN6hhT6xwVBGJXiTSS4s3Q0I-_Q%3D%3D&ratebypass=yes&sig=AOq0QJ8wRQIhAKCj2h_Ngya3BxpV21cu3Xctw_CBdCkndeLrlh4sGS0ZAiA-SakdLN_e08RVzsIdpa4eH0tlcyjIEM2p_2D7RbRZcg%3D%3D',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVWoIpDVkOH0%2Fmaxresdefault.jpg&f=1&nofb=1',
      title: 'Mo Bamba',
      author: 'Sheck Wes',
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
