import React, { useEffect, useRef } from 'react'
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

  const onMiddlePlaying = () => {
    const middle = Math.floor(player.current?.duration / 2)

    player.current.currentTime = middle
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
      <button onClick={onMiddlePlaying}>Middle</button>
      <audio
        onEnded={() => audio.setNextSong(audio.playing.id)}
        src={audio.playing?.songURL}
        ref={player}
      ></audio>

      <PlayerMain isDisplayed={audio.playing}>
        <PlayerInner>
          <div style={{ color: '#fff' }}>VOLUME</div>
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
          <input type='range' name='' id='' />
        </ProgressMusic>
      </PlayerMain>
    </>
  )
})

export default withTheme(Player)
