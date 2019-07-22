import styled from 'styled-components'

const ButtonContainer = styled.View`
  /* background-color: ${props => props.theme.WHITE}; */
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
`
const InnerButtonContainer = styled.View`
  height: 50%;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Button = styled.TouchableOpacity`
  width: 210px;
  height: 50px;
  background-color: rgb(26, 236, 134);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border: 3px solid #fff;
`
const ButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 24px;
  color: #fff;
`

export { ButtonContainer, InnerButtonContainer, Button, ButtonText }