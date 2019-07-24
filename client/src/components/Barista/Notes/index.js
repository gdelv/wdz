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
    }
  }
  toggleReceivedBar = () => {
    if (this.state.isReceivedBarActive) {
      null
    }
    if (!this.state.isReceivedBarActive) {
      this.setState({ isReceivedBarActive: true })
      this.setState({ isSentBarActive: false })
    }
  }

  render() {
    return (
      <Wrapper>
        <TopBar
          Title="PS Notes"
        />
        <Navigation>

          <NavigationButton onPress={this.toggleReceivedBar}>
            <NavigationItem>
              <NavigationText>RECEIVED</NavigationText>
            </NavigationItem>
          </NavigationButton>

          <NavigationButton onPress={this.toggleSentBar}>
            <NavigationItem>
              <NavigationText>SENT</NavigationText>
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
