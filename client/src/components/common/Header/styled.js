import styled from 'styled-components'

const Wrapper = styled.View`
  background-color: ${props => props.theme.GREEN};
  height: 50%;
  max-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 25px;
  padding-top: 25%;
`

export { Wrapper, Title }