import styled from 'styled-components'

const Wrapper = styled.View`
  max-height: 120px;
  height: 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.GREEN};
`
const IconContainer = styled.View`
  height: 70%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavIcon = styled.Image`
`


export {
  Wrapper,
  IconContainer,
  NavIcon
}