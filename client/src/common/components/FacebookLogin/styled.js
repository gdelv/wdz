import styled from 'styled-components'

const Container = styled.View`
  background-color: red;
`
const Description = styled.Text``

const ButtonContainer = styled.View``
const FacebookButton = styled.TouchableOpacity`
  height: 40px;
  width: 60%;
  border-radius: 20px;
  background-color: rgb(26, 236, 134);
  border: 3px solid ${props => props.theme.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
`
const FacebookIcon = styled.Image`
  height: 20.7px;
  width: 10.7px;
`
const ButtonText = styled.Text`
  align-self: center;
  font-family: 'Poppins-Bold';
  font-size: 16.5px;
  color: ${props => props.theme.WHITE};
  padding-left: 10px;
`

export { Container, Description, ButtonContainer, FacebookButton, FacebookIcon, ButtonText }