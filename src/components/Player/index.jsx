import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Player from './Player.jsx'

export const PlayerContainer = observer(({ audio, player }) => {
  // audio
  const [curTime, setCurTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const dur = player.current?.duration

  const handleVolume = (v) => {
    setVolume(v)
    player.current.volume = v
  }

  const muteVolume = () => {
    setVolume(0)
    player.current.volume = 0
  }

  const handleProgress = (e) => {
    let duration = dur === Infinity ? 20 : dur

    let compute = Math.floor((e.target.value * duration) / 100)

    setCurTime(compute)
    player.current.currentTime = compute
  }

  useEffect(() => {
    if (audio.isPlayingId) {
      player.current.play()
    } else {
      player.current.pause()
    }
  }, [audio.isPlayingId, audio.playing, player])

  return (
    <Player
      audio={audio}
      player={player}
      setCurTime={setCurTime}
      volume={volume}
      handleVolume={handleVolume}
      handleProgress={handleProgress}
      curTime={curTime}
      dur={dur}
      muteVolume={muteVolume}
    />
  )
})
