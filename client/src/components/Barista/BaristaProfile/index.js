import React from 'react'
import { View, Text } from 'react-native'
import { TopBar } from '../../../common'
import { Wrapper } from '../../../common/styled'


const BaristaProfile = () => {
  return (
    <Wrapper>
      <TopBar
        Title="My Schedule"
      />
      <Text>This is the Barista's profile.</Text>
    </Wrapper>
  )
}

export default BaristaProfile
