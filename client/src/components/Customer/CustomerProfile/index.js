import React from 'react'
import { ScrollView, Image } from 'react-native'
import {
  Wrapper,
  View_ProfilePicture,
  Image_ProfilePicture,
  View_NumberOfFavs,
  Text_Favs,
  Text_Number
} from './styled'
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
        <TopBar Title='Jane Smith' Left={renderGearIcon()} />
        <View_ProfilePicture>{renderProfilePicture()}</View_ProfilePicture>
        <View_NumberOfFavs>
          <Text_Number>54</Text_Number>
          <Text_Favs>Faves</Text_Favs>
        </View_NumberOfFavs>
        {/* EMPTY CANVAS SECTION */}
        {/* Followed by added favorite baristas */}
      </ScrollView>
      <NavBar />
    </React.Fragment>
  )
}

export default CustomerProfile
