import styled, { css } from 'styled-components/macro'

export const Controller = styled.div`
  background-color: rgb(19, 19, 19);
  width: 120px;
  display: flex;
  justify-content: space-between;
  img {
    width: 32px;
    transition: all 0.1s ease-in-out;

    &:hover {
      border: 2px solid #fff;
      padding: 1px;
    }
  }
`

export const PlayerMain = styled.div`
  ${(props) =>
    props.isDisplayed
      ? css`
          display: flex;
          transform: translateY(0%);
          transition: all 0.3s ease-in-out;
        `
      : css`
          display: none;
          transform: translateY(100%);
        `}

  justify-content: space-around;
  align-items: center;
  background-color: rgb(19, 19, 19);
  height: 50px;
  margin-top: auto;
  border-top: 2px solid black;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`

export const SongInfo = styled.div`
  display: flex;
  color: rgb(240, 240, 240);
  width: 280px;

  img {
    height: 35px;
    width: 35px;
    object-fit: cover;
    border: 1px solid #fff;
  }

  span {
    display: block;
  }
`