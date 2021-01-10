import React from 'react'
import {
  Controller,
  PlayerMain,
  SongInfo,
  ProgressMusic,
  PlayerInner,
  Volume,
} from './Player.style.js'
import { ErrorSong } from '../ErrorSong'
import { withTheme } from 'styled-components'

const Player = ({
  audio,
  player,
  setCurTime,
  volume,
  handleVolume,
  handleProgress,
  curTime,
  dur,
  toggleMuteVolume,
  notMuted,
  errDisplayValue,
  setErrDisplayValue,
  isModalOpened,
  setIsModalOpened,
}) => {
  return (
    <>
      <audio
        onTimeUpdate={(e) => setCurTime(e.target.currentTime)}
        onEnded={async () => await audio.setNextSong(audio.playing.id)}
        onError={(e) => {
          e.preventDefault()
          setIsModalOpened(true)
        }}
        src={audio.playing?.songURL}
        ref={player}
        type='audio/mpeg'
        preload='true'
        autoPlay={false}
      ></audio>

      <PlayerMain isDisplayed={audio.playing}>
        <ErrorSong
          display={errDisplayValue}
          setIsModalOpened={setIsModalOpened}
        />
        <PlayerInner>
          <Volume>
            <img
              onClick={toggleMuteVolume}
              style={{ height: 32 }}
              src={notMuted ? 'assets/volume.svg' : 'assets/volume-muted.svg'}
              alt='volume'
            />
            <input
              className='volume'
              value={Math.floor(volume * 100)}
              type='range'
              onChange={(e) => handleVolume(e.target.value / 100)}
            />
          </Volume>
          <Controller>
            <img
              onClick={async () => await audio.setPrevSong(audio.playing.id)}
              src='assets/prev.svg'
              alt='previous'
            />
            <img
              src={audio.isPlayingId ? 'assets/pause.svg' : 'assets/play.svg'}
              onClick={() => audio.setIsPlaying(audio.playing.id)}
              alt='play'
            />
            <img
              onClick={async () => await audio.setNextSong(audio.playing.id)}
              src='assets/forward.svg'
              alt='next'
            />
          </Controller>
          <SongInfo>
            <img src={audio.playing?.img} alt={audio.playing?.title} />
            <div>
              <h4>{audio.playing?.title}</h4>
              <span>{audio.playing?.author}</span>
            </div>
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
}

export default withTheme(Player)
