import styled, { css } from 'styled-components'

function getColorTheme(props) {
  if (props.theme.mode === 'dark') {
    return 'invert(100%)'
  }

  return 'none'
}

export const Controller = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 120px;
  display: flex;
  justify-content: space-between;
  img {
    width: 32px;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    filter: ${(props) => getColorTheme(props)};

    &:hover {
      border: 2px solid gray;
      padding: 1px;
    }

    &:active {
      filter: invert(50%);
    }
  }
`

export const PlayerMain = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  height: 50px;
  margin-top: auto;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  transition: all 0.2s ease-in-out;

  position: realtive;
  ${(props) =>
    props.isDisplayed
      ? css`
          transform: translateY(0%);
          transition: all 0.3s ease-in-out;
        `
      : css`
          transform: translateY(120%);
        `}
`

export const ProgressMusic = styled.div`
  width: inherit;
  input {
    width: 100%;
    position: absolute;
    outline: none;
    border: 0;
    top: -12px;
    left: 0;
  }
  input:focus {
    outline: none;
    border: 0;
  }
`

export const SongInfo = styled.div`
  display: flex;
  color: ${(props) => props.theme.primary};
  width: 280px;
  justify-content: center;
  align-items: center;

  img {
    height: 35px;
    width: 35px;
    object-fit: cover;
    border: 1px solid ${(props) => props.theme.primary};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0.5rem;

    span {
      font-weight: 300;
      font-size: 14px;
    }
  }
`
export const PlayerInner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
