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
`
const PhotoRight = styled.ImageBackground`
  height: 100%;
  width: 100%;
`
const Shader = styled.View`
  height: 100%;
  width: 65%;
  background-color: ${props => props.theme.SHADE};
`
export {
  Wrapper,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  Shader,
  CancelText,
  PlusIcon
}