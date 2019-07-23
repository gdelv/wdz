import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { TopBar } from '../../../common'
import { Wrapper } from '../../../common/styled'
import { PlusIcon, CancelText } from './styled'
import plusIcon from '../../../assets/img/plus-icon.png'

class BaristaProfile extends React.Component {
  renderPlusIcon = () => {
    return (
      <PlusIcon
        source={plusIcon}
      />
    )
  }
  renderCancelButton = () => {
    return (
      <TouchableOpacity>
        <CancelText>
          CANCEL
        </CancelText>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <Wrapper>
        <TopBar
          Title="My Schedule"
          LeftSection={this.renderCancelButton()}
          RightSection={this.renderPlusIcon()}
        />
        <Text>This is the Barista's profile.</Text>
      </Wrapper>
    )
  }
}

export default BaristaProfile
