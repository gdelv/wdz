import styled from 'styled-components'

const Wrapper = styled.View`
  height: 100%;
`
const PlusIcon = styled.Image`
  width: 20px;
  height: 20px;
`
const PhotoContainer = styled.View`
  height: 30%;
  display: flex;
  flex-direction: row;
`
const ProfilePhoto = styled.Image`
  height: 100%;
  width: 45%;
  border-right-width: 20px;
`
const PhotoRight = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-left-width: 2.5px;
  border-left-color: ${props => props.theme.WHITE};
`
const Shader = styled.View`
  height: 100%;
  width: 55%;
  background-color: ${props => props.theme.SHADE};
  display: flex;
  justify-content: center;
  padding-left: 20px;
`
const Name = styled.Text`
  color: ${props => props.theme.WHITE};;
  font-family: ${props => props.theme.POPPINS_BOLD};
  letter-spacing: 1.5px;
`
const BottomContainer = styled.View`
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
`
const InnerContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
`
const TopText = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 30px;
`
const MiddleText = styled.Text`
  font-size: 20px;
`
const ButtonContainer = styled.View`
`
const Button = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: rgb(26, 236, 134);
  border: 3px solid ${props => props.theme.GREEN};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 28px;
`
const ButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-family: ${props => props.theme.POPPINS_BOLD};
`


export {
  Wrapper,
  PlusIcon,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  Shader,
  Name,
  BottomContainer,
  InnerContainer,
  TopText,
  MiddleText,
  ButtonContainer,
  Button,
  ButtonText
}