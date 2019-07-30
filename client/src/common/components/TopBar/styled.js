import styled from 'styled-components'

const Wrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${(props) => props.theme.GREEN};
  height: 100px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
`
const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
`
const LeftSection = styled.View``
const MiddleSection = styled.View``
const RightSection = styled.View`
  display: flex;
  align-items: flex-end;
`
const Title = styled.Text`
  font-family: ${(props) => props.theme.POPPINS_BOLD};
  text-align: center;
`

export {
  Wrapper,
  ButtonWrapper,
  LeftSection,
  MiddleSection,
  RightSection,
  Title
}
