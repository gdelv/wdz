import styled from 'styled-components'

const Wrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${props => props.theme.GREEN};
  height: 15%;
  max-height: 110px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
`
const LeftSection = styled.View`
  width: 25%;
`
const MiddleSection = styled.View`
  width: 40%;
`
const RightSection = styled.View`
  width: 25%;
  display: flex;
  align-items: flex-end;
`
const Title = styled.Text`
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 20px;
  text-align: center;
`

export {
  Wrapper,
  LeftSection,
  MiddleSection,
  RightSection,
  Title,
}