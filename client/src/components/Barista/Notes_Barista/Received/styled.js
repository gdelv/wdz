import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const View_Container = styled.View`
  padding-right: 15%;
  padding-left: 15%;
  padding-top: 50%;
`
const Text_Title = styled.Text`
  font-family: ${(props) => props.theme.POPPINS_BOLD};
  font-size: 30px;
  text-align: center;
`
const Text_Subtext = styled.Text`
  font-size: 18px;
  text-align: center;
`

export { Wrapper, View_Container, Text_Title, Text_Subtext }
