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
  height: 55px;
  margin-top: auto;

  position: fixed;
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
export const Volume = styled.div`
  width: 210px;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
    margin-right: 1rem;
    filter: ${(props) => getColorTheme(props)};
  }

  input {
    width: 150px;
    background-color: transparent;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 7px;
    border-radius: 5px;
    background-color: #e1e1e1;
    border: 2px solid #ccc;
  }

  input[type='range']::-moz-range-thumb {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: #3c3c3c;
    border: 5px solid #3c3c3c;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  }

  input[type='range']::-moz-range-progress {
    height: 7px;
    border-radius: 0px 10px;
    background-color: rgb(179, 179, 179);
    border: 2px solid #d8d8d8;
  }
`
