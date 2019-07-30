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
  font-size: 16px;
  text-align: center;
  margin-bottom: 12%;
`
const View_Button = styled.View`
  display: flex;
  align-items: center;
`
const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.GREEN};
  width: 70%;
  height: 30px;
  border-radius: 20px;
`
const Text_Button = styled.Text`
  color: ${(props) => props.theme.WHITE};
  font-family: ${(props) => props.theme.POPPINS_BOLD};
  text-align: center;
  line-height: 30px;
`

export {
  Wrapper,
  View_Container,
  View_Text,
  Text_Title,
  Text_SubText,
  View_Button,
  Button,
  Text_Button
}
