import React, { useState, useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Player from './Player.jsx'

export const PlayerContainer = observer(({ audio }) => {
  // audio

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
    <Player
      audio={audio}
      player={player}
      setCurTime={setCurTime}
      volume={volume}
      handleVolume={handleVolume}
      handleProgress={handleProgress}
      curTime={curTime}
      dur={dur}
    />
  )
})
