import React from 'react'
import { ScrollView } from 'react-native'
import Sent from './Sent'
import Received from './Received'
import { TopBar, NavBar } from '../../../common'
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
  render() {
    const { receivedBarStatus, sentBarStatus } = this.state
    return (
      <Wrapper>
        <TopBar Title='PS Notes' />
        <Navigation>
          <NavigationButton onPress={this.toggleReceivedBar}>
            <NavigationItem active={receivedBarStatus}>
              <NavigationText active={receivedBarStatus}>
                RECEIVED
              </NavigationText>
            </NavigationItem>
          </NavigationButton>

          <NavigationButton onPress={this.toggleSentBar}>
            <NavigationItem active={sentBarStatus}>
              <NavigationText active={sentBarStatus}>SENT</NavigationText>
            </NavigationItem>
          </NavigationButton>
        </Navigation>

        <ScrollView>
          <BottomContainer>{this.renderComponent()}</BottomContainer>
        </ScrollView>
        <NavBar />
      </Wrapper>
    )
  }
}

export default Notes
