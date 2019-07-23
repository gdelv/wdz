import styled from 'styled-components'

const CancelText = styled.Text`
  color: white;
  font-family: ${props => props.theme.POPPINS_BOLD};
  font-size: 15px;
`
const PlusIcon = styled.Image`
  width: 20px;
  height: 20px;
`
export {
  CancelText,
  PlusIcon
}