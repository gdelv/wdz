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
`
const ProfilePhoto = styled.Image`
  height: 100%;
  width: 45%;
`
const PhotoRight = styled.Image``
export {
  Wrapper,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  CancelText,
  PlusIcon
}