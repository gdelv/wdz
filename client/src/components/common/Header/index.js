import React from 'react'
import { View, Text } from 'react-native'
import { Wrapper } from './styled'

const Header = (props) => {
  return (
    <Wrapper>
      <Text>{props.children}</Text>
    </Wrapper>
  )
}

export default Header
