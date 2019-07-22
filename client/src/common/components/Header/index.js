import React from 'react'
import { View, Text } from 'react-native'
import { Wrapper, Title } from './styled'

const Header = (props) => {
  return (
    <Wrapper>
      <Title >{props.children}</Title>
    </Wrapper>
  )
}

export default Header
