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
  let imageStateSrc =
    isPlayingId !== id ? 'assets/pause_on.svg' : 'assets/play_on.svg'

  return (
    <Item active={playingId === id}>
      <SongImg
        isPlayingId={isPlayingId === id}
        loadedSongId={loadedSongId !== id}
      >
        <img src={img} alt={title} />
        <SongMetaImg>
          <img
            src={imageStateSrc}
            alt='song state'
            onClick={() => setSong({ title, author, img, id })}
          />
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
