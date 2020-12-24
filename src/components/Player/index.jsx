import React, { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Controller,
  PlayerMain,
  SongInfo,
  ProgressMusic,
  PlayerInner,
} from './Player'
import { withTheme } from 'styled-components'

const Player = observer(({ audio }) => {
  const player = useRef(null)

  const [curTime, setCurTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const dur = player.current?.duration

  const handleVolume = (v) => {
    setVolume(v)
    player.current.volume = v
  }

  const handleProgress = (e) => {
    let duration = dur === Infinity ? 20 : dur

    let compute = Math.floor((e.target.value * duration) / 100)

    console.log('COMPUTED VALUE', compute)
    setCurTime(compute)
    player.current.currentTime = compute
  }

  useEffect(() => {
    if (audio.isPlaying) {
      player.current.play()
    } else {
      player.current.pause()
    }
  }, [audio.isPlaying, audio.playing])

  return (
    <>
      <audio
        onTimeUpdate={(e) => setCurTime(e.target.currentTime)}
        onEnded={() => audio.setNextSong(audio.playing.id)}
        src={audio.playing?.songURL}
        ref={player}
        type='audio/mpeg'
        preload='true'
        autoPlay={false}
      ></audio>

      <PlayerMain isDisplayed={audio.playing}>
        <PlayerInner>
          <div>
            <span>{Math.floor(volume * 100)}</span>
            <input
              value={Math.floor(volume * 100)}
              type='range'
              onChange={(e) => handleVolume(e.target.value / 100)}
            />
          </div>
          <Controller>
            <img
              onClick={() => audio.setPrevSong(audio.playing.id)}
              src='assets/prev.svg'
              alt='previous'
            />
            <img
              src={audio.isPlaying ? 'assets/pause.svg' : 'assets/play.svg'}
              onClick={audio.setIsPlaying}
              alt='play'
            />
            <img
              onClick={() => audio.setNextSong(audio.playing.id)}
              src='assets/forward.svg'
              alt='next'
            />
          </Controller>
          <SongInfo>
            <img src={audio.playing?.img} alt={audio.playing?.title} />
            <span>{audio.playing?.author}</span>
            <span>{audio.playing?.title}</span>
          </SongInfo>
        </PlayerInner>
        <ProgressMusic>
          <input
            type='range'
            value={dur ? (curTime * 100) / dur : 0}
            onChange={handleProgress}
          />
        </ProgressMusic>
      </PlayerMain>
    </>
  )
})

export default withTheme(Player)
