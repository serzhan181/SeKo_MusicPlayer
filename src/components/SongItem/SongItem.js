import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.secondary};
  margin: 0 0.3rem;
  width: 270px;
  height: 320px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  position: relative;
  margin-bottom: 1rem;
  background-color: ${(props) => {
    if (props.active) return props.theme.third
    return props.theme.secondary
  }};
`

export const SongMetaImg = styled.div`
  img {
    display: none;
    position: absolute;
    left: 0%;
    top: 45%;
    cursor: pointer;
  }
`

export const SongImg = styled.div`
  display: flex;
  margin: auto;
  height: 85%;
  width: 100%;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    min-width: 100%;
    object-fit: cover;
  }

  &:hover {
    ${SongMetaImg} {
      img {
        display: block;
        height: 70px;
        object-fit: contain;
      }
    }
  }
`

export const GroupDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;
  color: ${(props) => props.theme.primary};

  span {
    font-weight: 300;
    font-size: 14px;
  }
`
