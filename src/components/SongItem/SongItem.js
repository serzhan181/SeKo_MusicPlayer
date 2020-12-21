import styled from 'styled-components/macro'

export const Item = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.secondary};
  padding: 0.3rem;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  background-color: ${(props) => {
    if (props.active) return props.theme.primary
    return props.theme.third
  }};
`

export const SongImg = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    &::before {
      content: url('assets/play_on_song.svg');
      cursor: pointer;
      position: absolute;
      width: 50px;
      height: 50px;
      top: 25%;
      left: 25%;
    }
  }
`

export const GroupDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.3rem;

  span {
    color: ${(props) => props.theme.secondary};
  }
`
