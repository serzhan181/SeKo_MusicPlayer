import React from 'react'
import { observer } from 'mobx-react-lite'
import { Preloader } from '../Preloader'
import SongItem from '../SongItem'
import { MainList } from './Main.style'
import { withTheme } from 'styled-components'
import { useQuery } from '../../hooks/useQuery'

const MainContainer = observer(({ audio }) => {
  const query = useQuery()

  audio.setSongsOnSearch(query.get('q'))

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
              setSong={audio.setSong}
              id={s.id}
              playingId={audio.playing?.id}
              isPlaying={audio.isPlaying}
              setIsPlaying={audio.setIsPlaying}
              isSetSongLoaded={audio.isSetSongLoaded}
            />
          ))}
        </MainList>
      )}
    </>
  )
})

export default withTheme(MainContainer)
