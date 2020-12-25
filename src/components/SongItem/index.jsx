import React, { useState } from 'react'
import { GroupDetails, Item, SongImg } from './SongItem'
import { withTheme } from 'styled-components'

const SongItem = ({
  songURL,
  title,
  author,
  img,
  setSong,
  id,
  playingId,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <Item active={playingId === id}>
      <SongImg
        isPlaying={isPlaying}
        onClick={() => setSong({ songURL, title, author, img, id })}
      >
        <img src={img} alt={title} />
      </SongImg>
      <GroupDetails>
        <h4>{title}</h4>
        <span>{author}</span>
      </GroupDetails>
    </Item>
  )
}

export default withTheme(SongItem)
