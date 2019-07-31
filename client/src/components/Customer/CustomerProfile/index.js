import React from 'react'
import { ScrollView } from 'react-native'
import { Wrapper } from './styled'
import { TopBar, NavBar } from '../../../common'

const CustomerProfile = () => {
  return (
    <React.Fragment>
      <TopBar />
      <ScrollView />
      <NavBar />
    </React.Fragment>
  )
}

export default CustomerProfile
