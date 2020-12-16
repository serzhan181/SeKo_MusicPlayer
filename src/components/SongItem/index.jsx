import React from 'react'
import { GroupDetails, Item, SongImg } from './SongItem'

export const SongItem = ({ songURL, title, author, img, setSong }) => {
  return (
    <Item>
      <SongImg onClick={() => setSong({ songURL, title, author, img })}>
        <img src={img} alt={title} />
      </SongImg>
      <GroupDetails>
        <strong>{title}</strong>
        <span>{author}</span>
      </GroupDetails>
    </Item>
  )
}
