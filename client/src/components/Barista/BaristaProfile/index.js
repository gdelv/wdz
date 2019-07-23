import React from 'react'
import { TopBar } from '../../../common'
import { Wrapper, PlusIcon, PhotoContainer, ProfilePhoto, PhotoRight } from './styled'
import plusIcon from '../../../assets/img/plus-icon.png'
import baristaDev from '../../../assets/img/barista-dev.jpeg'

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
        </PhotoContainer>

        {/*
          Here I will add the photo section for
          the barista profile.
        */}


        {/* 
          Here there will be a Calendar picker
          for the next 2 weeks. 
        */}

        {/*
          Here there will be a default calendar to
          add if the user has no calendars.
        */}

      </Wrapper>
    )
  }
}

export default BaristaProfile
