import styled from 'styled-components'

const ButtonWrapper = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: auto;
`
const Button = styled.TouchableOpacity`
  width: 107.1px;
  margin-bottom: 15%
`
const ButtonText = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 12px;
  letter-spacing: .55px;
  text-align: center;
`

export { ButtonWrapper, Button, ButtonText }