import React from 'react'
import { Text } from 'react-native'
import { Header, Navigation, FacebookLogin } from '../../../common'
import { Wrapper } from '../../../common/styled'

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
