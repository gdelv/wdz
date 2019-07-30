import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TopBar } from '../../../common'
import plusIcon from '../../../assets/img/plus-icon.png'
import baristaDev from '../../../assets/img/developmentPlaceholders/barista-dev.jpeg'
import coffeePlaceholder from '../../../assets/img/coffee-placeholder.png'
import {
  Wrapper,
  PlusIcon,
  PhotoContainer,
  ProfilePhoto,
  PhotoRight,
  Shader,
  Name,
  BottomContainer,
  InnerContainer,
  TopText,
  MiddleText,
  ButtonContainer,
  Button,
  ButtonText
} from './styled'

const BaristaProfile = () => {
  return (
    <Wrapper>
      <TopBar
        Title='My Schedule'
        RightSection={
          <TouchableOpacity>
            <PlusIcon source={plusIcon} />
          </TouchableOpacity>
        }
      />

      <PhotoContainer>
        <ProfilePhoto source={baristaDev} />
        <PhotoRight source={coffeePlaceholder}>
          <Shader>
            <Name>Mike Smith</Name>
          </Shader>
        </PhotoRight>
      </PhotoContainer>

      <BottomContainer>
        <InnerContainer>
          <TopText>You're all set!</TopText>
          <MiddleText>Let's create some schedule.</MiddleText>
          <ButtonContainer>
            <Button onPress={() => Actions.CreateSchedule()}>
              <ButtonText>ADD NEW</ButtonText>
            </Button>
          </ButtonContainer>
        </InnerContainer>
      </BottomContainer>
    </Wrapper>
  )
}

export default BaristaProfile
