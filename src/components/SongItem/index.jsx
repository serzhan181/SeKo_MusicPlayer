import React from 'react'
import { GroupDetails, Item, SongImg } from './SongItem'
import { withTheme } from 'styled-components'

const SongItem = ({ songURL, title, author, img, setSong }) => {
  return (
    <Item>
      <SongImg onClick={() => setSong({ songURL, title, author, img })}>
        <img src={img} alt={title} />
      </SongImg>
      <GroupDetails>
        <span>{title}</span>
        <span>{author}</span>
      </GroupDetails>
    </Item>
  )
}

export default withTheme(SongItem)
