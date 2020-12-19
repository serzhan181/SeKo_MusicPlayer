import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { Controller, PlayerMain, SongInfo } from './Player'
import { withTheme } from 'styled-components'

const Player = observer(({ audio }) => {
  const player = useRef(null)

  useEffect(() => {
    if (audio.isPlaying) {
      player.current.play()
    } else {
      player.current.pause()
    }
  }, [audio.isPlaying, audio.playing])

  return (
    <>
      <audio src={audio.playing?.songURL} ref={player}></audio>
      <PlayerMain isDisplayed={audio.playing}>
        <div style={{ color: '#fff' }}>VOLUME</div>
        <Controller>
          <img src='assets/prev.svg' alt='previous' />
          <img
            src={audio.isPlaying ? 'assets/pause.svg' : 'assets/play.svg'}
            onClick={audio.setIsPlaying}
            alt='play'
          />
          <img src='assets/forward.svg' alt='next' />
        </Controller>

        <SongInfo>
          <img src={audio.playing?.img} alt={audio.playing?.title} />
          <span>{audio.playing?.author}</span>
          <span>{audio.playing?.title}</span>
        </SongInfo>
      </PlayerMain>
    </>
  )
})

export default withTheme(Player)
