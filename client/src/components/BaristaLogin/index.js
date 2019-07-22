import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../common/components/Header'
import Navigation from '../../common/components/Navigation'
import FacebookLogin from '../../common/components/FacebookLogin'

import { Wrapper } from '../../common/styled'

const BaristaLogin = () => {
  return (
    <Wrapper>
      <Header>
        <Text>Welcome Barista!</Text>
      </Header>
      <FacebookLogin>
        Log in or sign up below.
      </FacebookLogin>
      <Navigation>
        MAYBE LATER
      </Navigation>
    </Wrapper>
  )
}

export default BaristaLogin
