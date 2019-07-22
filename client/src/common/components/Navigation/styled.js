import styled from 'styled-components'

const ButtonWrapper = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: papayawhip;
  flex: auto;
  /* padding-bottom: 15%; */

`
const Button = styled.TouchableOpacity`
  background-color: red;
  width: 107.1px;

`
const ButtonText = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 12px;
  letter-spacing: .55px;
  text-align: center;
`

export { ButtonWrapper, Button, ButtonText }