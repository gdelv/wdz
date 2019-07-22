import styled from 'styled-components'

const Wrapper = styled.View`
  background-color: ${props => props.theme.GREEN};
  height: 100%;
`

const ButtonContainer = styled.View`
  display: flex;
  background-color: ${props => props.theme.GREEN};

`

export { Wrapper, ButtonContainer }