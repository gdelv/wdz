import React from 'react'
import { ScrollView, Image } from 'react-native'
import { Wrapper } from './styled'
import { TopBar, NavBar } from '../../../common'
import iconGear from '../../../assets/img/iconGear.png'

const CustomerProfile = () => {
  renderGearIcon = () => {
    return <Image source={iconGear} />
  }
  return (
    <React.Fragment>
      <TopBar Title='John Smith' Left={renderGearIcon()} />
      <ScrollView>
        {/* PROFILE PICTURE SECTION */}
        {/* Number of FAVS */}
        {/* EMPTY CANVAS SECTION */}
        {/* Followed by added favorite baristas */}
      </ScrollView>
      <NavBar />
    </React.Fragment>
  )
}

export default CustomerProfile
