import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
  height: 150px;
`
const PhotoContainer = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
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
export {
  Wrapper,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  Shader,
  Name
}