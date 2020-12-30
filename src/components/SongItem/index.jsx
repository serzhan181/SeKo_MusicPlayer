import React from 'react'
import { GroupDetails, Item, SongImg, SongMetaImg } from './SongItem'
import { withTheme } from 'styled-components'

const SongItem = ({
  title,
  author,
  img,
  setSong,
  id,
  playingId,
  isPlayingId,
  loadedSongId,
}) => {
  return (
    <Item active={playingId === id}>
      <SongImg
        isPlayingId={isPlayingId === id}
        loadedSongId={loadedSongId !== id}
        onClick={() => setSong({ title, author, img, id })}
      >
        <img src={img} alt={title} />
        <SongMetaImg>
          <img src='assets/songLoading.svg' alt='loading' />
        </SongMetaImg>
      </SongImg>
      <GroupDetails>
        <h4>{title}</h4>
        <span>{author}</span>
      </GroupDetails>
    </Item>
  )
}

export default withTheme(SongItem)
