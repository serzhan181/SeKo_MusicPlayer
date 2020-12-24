import styled from 'styled-components'

export const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.third};
  border-bottom: 2px solid ${(props) => props.theme.secondary};
`
