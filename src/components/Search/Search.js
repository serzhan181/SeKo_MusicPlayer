import styled from 'styled-components/macro'

export const Input = styled.input`
  width: 500px;
  height: 30px;

  font-size: 1.3rem;
  padding: 0.2rem;
  color: #222;

  border: 1px solid ${(props) => props.theme.primary};
  outline: none;
`
