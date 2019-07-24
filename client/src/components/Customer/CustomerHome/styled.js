import styled from 'styled-components';

const Wrapper = styled.View`
  background-color: ${props => props.theme.WHITE};
  height: auto;
`
const ScrollViewBaristaList = styled.ScrollView`
  height: auto;
`

export {
  Wrapper,
  ScrollViewBaristaList
}