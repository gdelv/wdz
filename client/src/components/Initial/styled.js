import styled from 'styled-components'

const Wrapper = styled.View`
  background-color: white;
  height: 100%;
`
const TitleContainer = styled.View`
  height: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Title = styled.Text`
  font-size: 35px;
  font-family: ${props => props.theme.POPPINS_BOLD};
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`
const SecondaryContainer = styled.View`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SecondaryText = styled.Text`
  font-size: 30px;
  font-family: ${props => props.theme.POPPINS_BOLD};
  color: ${props => props.theme.GREY};
`
const ButtonContainer = styled.View`
`
const InnerButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
`
const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.GREEN};
  border-radius: 20px;
  width: 200px;
  height: 32px;
`
const ButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-family: ${props => props.theme.POPPINS_BOLD};
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.55px;
  line-height: 32px;
`
const DividerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Divider = styled.View`
  border-bottom-color: ${props => props.theme.GREY_LINE};
  border-bottom-width: 1px;
  width: 45%;
`
const CoffeeMug = styled.Image`
  margin-right: 2.5%;
  margin-left: 2.5%;
`

export {
  Wrapper,
  TitleContainer,
  Title,
  SecondaryContainer,
  SecondaryText,
  ButtonContainer,
  InnerButtonContainer,
  Button,
  ButtonText,
  DividerContainer,
  Divider,
  CoffeeMug
}