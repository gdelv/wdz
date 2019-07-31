import React from 'react'
import { ScrollView, Image } from 'react-native'
import { Wrapper, View_ProfilePicture, Image_ProfilePicture } from './styled'
import { TopBar, NavBar } from '../../../common'
import iconGear from '../../../assets/img/iconGear.png'
import profilePicture from '../../../assets/img/profilePicture.jpeg'

const CustomerProfile = () => {
  renderGearIcon = () => {
    return <Image source={iconGear} />
  }
  renderProfilePicture = () => {
    return (
      <Image
        source={profilePicture}
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    )
  }
  return (
    <React.Fragment>
      <ScrollView>
        <TopBar Title='John Smith' Left={renderGearIcon()} />
        <View_ProfilePicture>{renderProfilePicture()}</View_ProfilePicture>
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
