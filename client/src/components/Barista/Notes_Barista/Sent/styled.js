import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
`
const View_Container = styled.View``
const View_Text = styled.View`
  padding-top: 50%;
  padding-left: 12%;
  padding-right: 12%;
`
const Text_Title = styled.Text`
  font-size: 30px;
  font-family: ${(props) => props.theme.POPPINS_BOLD};
  text-align: center;
`
const Text_SubText = styled.Text`
  font-size: 18px;
  text-align: center;
`
const View_Button = styled.View``
const Button = styled.TouchableOpacity``

export {
  Wrapper,
  View_Container,
  View_Text,
  Text_Title,
  Text_SubText,
  View_Button,
  Button
}
