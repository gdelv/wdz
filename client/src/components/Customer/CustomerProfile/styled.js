import styled from 'styled-components'

const Wrapper = styled.View`
  height: 100px;
  background-color: cornflowerblue;
`
const View_ProfilePicture = styled.View`
  height: 200px;
  /* background-color: seagreen; */
`
const Image_ProfilePicture = styled.Image`
  height: 100%;
  width: 100%;
`
const View_NumberOfFavs = styled.View`
  background-color: ${props => props.theme.DARK_GREY};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
`
const Text_Favs = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.WHITE};
  padding-left: 1.5px;
`
const Text_Number = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 18px;
  color: ${props => props.theme.WHITE};
  padding-right: 1.5px;
`

const View_FavoriteBarista = styled.View``
const Text_DefaultTitle = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 30px;
`
const Text_DefaultSubText = styled.Text`
  font-size: 18px;
`

export {
  Wrapper,
  View_ProfilePicture,
  Image_ProfilePicture,
  View_NumberOfFavs,
  Text_Favs,
  Text_Number,
  View_FavoriteBarista,
  Text_DefaultTitle,
  Text_DefaultSubText
}
