import styled from 'styled-components'

export const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  position: relative;
  background-color: ${(props) => props.theme.secondary};
  border-bottom: 2px solid ${(props) => props.theme.secondary};
`

export const ModeIcon = styled.img`
  cursor: pointer;
  position: absolute;
  left: 30px;
`
