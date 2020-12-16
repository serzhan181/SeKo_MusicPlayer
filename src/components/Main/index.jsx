import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { SongItem } from '../SongItem'

export const Main = observer(({ audio }) => {
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
        />
      ))}
    </MainList>
  )
})

const MainList = styled.main`
  padding: 1rem 0px;
`
