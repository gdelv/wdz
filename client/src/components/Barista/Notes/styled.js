import styled from 'styled-components'

const Wrapper = styled.View`
  height: 100%;
  background-color: ${props => props.theme.WHITE};
`
const Navigation = styled.View`
  background-color: ${props => props.theme.OFF_WHITE};
  height: 12.5%;
  max-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const NavigationButton = styled.TouchableOpacity`
  width: 40%;
  height: 100%;
`
const NavigationItem = styled.View`
  background-color: ${props => props.theme.OFF_WHITE};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavigationText = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  color: ${props => props.theme.GREY};
`
export {
  Wrapper,
  Navigation,
  NavigationButton,
  NavigationItem,
  NavigationText
}