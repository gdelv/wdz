import React from 'react'
import { ScrollView, Image } from 'react-native'
import {
  Wrapper,
  View_ProfilePicture,
  Image_ProfilePicture,
  View_NumberOfFavs,
  Text_Favs,
  Text_Number,
  View_FavoriteBarista,
  Text_DefaultTitle,
  Text_DefaultSubText
} from './styled'
import { TopBar, NavBar } from '../../../common'
import iconGear from '../../../assets/img/iconGear.png'
import profilePicture from '../../../assets/img/profilePicture.jpeg'

const CustomerProfile = () => {
  renderGearIcon = () => {
    return <Image source={iconGear} />
  }
  renderProfilePicture = () => {
    return <Image_ProfilePicture source={profilePicture} />
  }
  return (
    <React.Fragment>
      <ScrollView>
        <TopBar Title='Jane Smith' Left={renderGearIcon()} />
        <View_ProfilePicture>{renderProfilePicture()}</View_ProfilePicture>
        <View_NumberOfFavs>
          <Text_Number>{null}</Text_Number>
          <Text_Favs>No Faves Yet.</Text_Favs>
        </View_NumberOfFavs>
        <View_FavoriteBarista>
          <Text_DefaultTitle>You're all set!</Text_DefaultTitle>
          <Text_DefaultSubText>
            Go favorite your baristas and they will show up here!
          </Text_DefaultSubText>
        </View_FavoriteBarista>
      </ScrollView>
      <NavBar />
    </React.Fragment>
  )
}

export default CustomerProfile
