import React from 'react'
import Sent from './Sent'
import Received from './Received'
import { TopBar } from '../../../common'
import {
  Wrapper,
  Navigation,
  NavigationButton,
  NavigationItem,
  NavigationText,
  BottomContainer
} from './styled'

class Notes extends React.Component {
  state = {
    isSentBarActive: false,
    isReceivedBarActive: true,
    receivedBarStatus: 'active',
    sentBarStatus: null
  }
  renderComponent = () => {
    if (this.state.isSentBarActive) {
      return <Sent />
    }
    if (this.state.isReceivedBarActive) {
      return <Received />
    }
  }
  toggleSentBar = () => {
    if (this.state.isSentBarActive) {
      null
    }
    if (!this.state.isSentBarActive) {
      this.setState({ isSentBarActive: true })
      this.setState({ isReceivedBarActive: false })
      this.setState({ receivedBarStatus: null })
      this.setState({ sentBarStatus: 'active' })
    }
  }
  toggleReceivedBar = () => {
    if (this.state.isReceivedBarActive) {
    }
    if (!this.state.isReceivedBarActive) {
      this.setState({ isReceivedBarActive: true })
      this.setState({ isSentBarActive: false })
      this.setState({ sentBarStatus: null })
      this.setState({ receivedBarStatus: 'active' })
    }
  }

  // when the received section is toggled off,
  // remove the active

  render() {
    return (
      <Wrapper>
        <TopBar
          Title="PS Notes"
        />
        <Navigation>

          <NavigationButton onPress={this.toggleReceivedBar}>
            <NavigationItem active={this.state.receivedBarStatus}>
              <NavigationText active={this.state.receivedBarStatus}>RECEIVED</NavigationText>
            </NavigationItem>
          </NavigationButton>

          <NavigationButton onPress={this.toggleSentBar}>
            <NavigationItem active={this.state.sentBarStatus}>
              <NavigationText active={this.state.sentBarStatus}>SENT</NavigationText>
            </NavigationItem>
          </NavigationButton>

        </Navigation>

        <BottomContainer>
          {this.renderComponent()}
        </BottomContainer>

      </Wrapper>
    )
  }
}

export default Notes
