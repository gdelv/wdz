import styled from 'styled-components'

const Wrapper = styled.View`
  height: 100%;
`
const CancelText = styled.Text`
  color: ${props => props.theme.OFF_WHITE};
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 15px;
`
const SaveText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 15px;
`
const MainContainer = styled.View`
  height: 60%;
`
const SubContainer = styled.View`
  height: 20%;
  border-bottom-color: ${props => props.theme.GREY};
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`
const InnerText = styled.Text`
  color: ${props => props.theme.GREY};
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 16px;
`

export {
  Wrapper,
  CancelText,
  SaveText,
  MainContainer,
  SubContainer,
  InnerText
}