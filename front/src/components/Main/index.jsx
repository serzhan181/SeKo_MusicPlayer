import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import SongItem from '../SongItem'
import { MainList } from './Main'
import { withTheme } from 'styled-components'
import { useQuery } from '../../hooks/useQuery'

const MainContainer = observer(({ audio }) => {
  const query = useQuery()

  useEffect(() => {
    audio.setSongsOnSearch(query.get('q'))
  }, [audio, query])

  return (
    <MainList>
      {audio.songs.map((s) => (
        <SongItem
          key={s.id}
          title={s.title}
          author={s.author}
          img={s.img}
          setSong={audio.setSong}
          id={s.id}
          playingId={audio.playing?.id}
          isPlaying={audio.isPlaying}
          setIsPlaying={audio.setIsPlaying}
          isSongLoaded={audio.isSongLoaded}
        />
      ))}
    </MainList>
  )
})

export default withTheme(MainContainer)
