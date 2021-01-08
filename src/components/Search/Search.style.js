import styled from 'styled-components'

export const Input = styled.input`
  width: 500px;
  height: 30px;

  font-size: 1.3rem;
  padding: 0.2rem;
  color: ${(props) => props.theme.secondary};

  border: 1px solid ${(props) => props.theme.secondary};
  outline: none;
`
