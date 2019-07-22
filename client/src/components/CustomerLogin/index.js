import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../common/components/Header'
import Navigation from '../../common/components/Navigation'
import FacebookLogin from '../../common/components/FacebookLogin'

import { Wrapper } from '../../common/styled'

const CustomerLogin = () => {
  return (
    <Wrapper>
      <Header>
        <Text>Hey there!</Text>
      </Header>
      <FacebookLogin>
        We know only certain baristas can make your perfect cup of coffee, so sign up, follow your favorites, and know when to go!
      </FacebookLogin>
      <Navigation>
        MAYBE LATER
      </Navigation>
    </Wrapper>
  )
}

export default CustomerLogin
