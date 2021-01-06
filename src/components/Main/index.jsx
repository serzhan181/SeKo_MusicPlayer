import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Preloader } from '../Preloader'
import SongItem from '../SongItem'
import { MainList } from './Main.style'
import { withTheme } from 'styled-components'
import { useQuery } from '../../hooks/useQuery'

const MainContainer = observer(({ audio, player }) => {
  const query = useQuery()

  audio.setSongsOnSearch(query.get('q'))

  const toggleSetSongOrSwitchState = (songId, songData) => {
    const state = audio.checkSongHasBeenSet(songId)
    console.log('STATE OF "state"', state)

    if (!state) {
      audio.setSong(songData)
    }
  }

  useEffect(() => {
    if (audio.isPlayingId) {
      player.current.play()
    } else {
      player.current.pause()
    }
  }, [audio.isPlayingId, audio.playing, player])

  return (
    <>
      {!audio.haveSongsLoaded ? (
        <Preloader />
      ) : (
        <MainList>
          {audio.songs.map((s) => (
            <SongItem
              key={s.id}
              title={s.title}
              author={s.author}
              img={s.img}
              toggleSetSongOrSwitchState={toggleSetSongOrSwitchState}
              id={s.id}
              playingId={audio.playing?.id}
              isPlayingId={audio.isPlayingId}
              loadedSongId={audio.loadedSongId}
            />
          ))}
        </MainList>
      )}
    </>
  )
})

export default withTheme(MainContainer)
