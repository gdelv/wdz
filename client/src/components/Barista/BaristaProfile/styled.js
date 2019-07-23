import styled from 'styled-components'

const Wrapper = styled.View`
  height: 100%;
`
const CancelText = styled.Text`
  color: white;
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 15px;
`
const PlusIcon = styled.Image`
  width: 20px;
  height: 20px;
`
const PhotoContainer = styled.View`
  height: 30%;
  background-color: grey;
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
  border-left-color: white;
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
export {
  Wrapper,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  Shader,
  Name,
  CancelText,
  PlusIcon
}