import React from 'react'
import { Text } from 'react-native'
import { Header, Navigation, FacebookLogin } from '../../common'
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
