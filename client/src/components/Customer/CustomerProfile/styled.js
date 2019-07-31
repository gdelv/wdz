import styled from 'styled-components'

const Wrapper = styled.View`
  height: 100px;
  background-color: cornflowerblue;
`
const View_ProfilePicture = styled.View`
  max-height: 150px;
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
  font-family: ${props => props.theme.POPPINS_MEDIUM};
  padding-left: 1.5px;
`
const Text_Number = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 18px;
  color: ${props => props.theme.WHITE};
  padding-right: 1.5px;
`

const View_Default = styled.View`
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 20%;
`
const Text_DefaultTitle = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  text-align: center;
  font-size: 30px;
`
const Text_DefaultSubText = styled.Text`
  text-align: center;
  font-size: 18px;
`
const View_Barista = styled.View``
const Image_Barista = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 70px;
  border: 5px solid ${props => props.theme.GREEN};
`
const Text_BaristaName = styled.Text``
const Text_BaristaCafe = styled.Text``
const TouchableOpacity_Faved = styled.TouchableOpacity``
const Text_Faved = styled.Text``
export {
  Wrapper,
  View_ProfilePicture,
  Image_ProfilePicture,
  View_NumberOfFavs,
  Text_Favs,
  Text_Number,
  View_Default,
  Text_DefaultTitle,
  Text_DefaultSubText,
  View_Barista,
  Image_Barista,
  Text_BaristaName,
  Text_BaristaCafe,
  TouchableOpacity_Faved,
  Text_Faved
}
