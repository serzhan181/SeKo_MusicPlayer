import styled from 'styled-components'

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
`

export const ErrorContainer = styled.div`
  padding: 1em;
  width: fit-content;
  height: fit-content;
  background-color: #929393;
  text-align: center;
  border: 2px solid #222;
  border-radius: 5px;
  position: relative;

  img {
    width: 20px;
    position: absolute;
    right: -5px;
    top: -7px;
    cursor: pointer;
  }
`
