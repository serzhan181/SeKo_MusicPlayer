import React from 'react'
import { observer } from 'mobx-react-lite'
import SongItem from '../SongItem'
import { MainList } from './Main'
import { withTheme } from 'styled-components'

const Main = observer(({ audio }) => {
  return (
    <MainList>
      {audio.songs.map((s) => (
        <SongItem
          key={s.id}
          songURL={s.songURL}
          title={s.title}
          author={s.author}
          img={s.img}
          setSong={audio.setSong}
          id={s.id}
        />
      ))}
    </MainList>
  )
})

export default withTheme(Main)
