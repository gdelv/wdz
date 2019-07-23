import React from 'react'
import { TopBar } from '../../../common'
import plusIcon from '../../../assets/img/plus-icon.png'
import baristaDev from '../../../assets/img/barista-dev.jpeg'
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

class BaristaProfile extends React.Component {
  renderPlusIcon = () => {
    return (
      <PlusIcon
        source={plusIcon}
      />
    )
  }
  // renderCancelButton = () => {
  //   return (
  //     <TouchableOpacity>
  //       <CancelText>
  //         CANCEL
  //       </CancelText>
  //     </TouchableOpacity>
  //   )
  // }
  render() {
    return (
      <Wrapper>

        <TopBar
          Title="My Schedule"
          RightSection={this.renderPlusIcon()}
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
              <Button>
                <ButtonText>ADD NEW</ButtonText>
              </Button>
            </ButtonContainer>
          </InnerContainer>
        </BottomContainer>
      </Wrapper>
    )
  }
}

export default BaristaProfile
