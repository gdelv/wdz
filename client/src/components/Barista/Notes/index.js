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
  toggleComponents = () => {
    if (!this.state.isSentBarActive) {
      this.setState({ isSentBarActive: true })
      this.setState({ isReceivedBarActive: false })
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

          <NavigationButton onPress={this.toggleComponents}>
            <NavigationItem>
              <NavigationText>RECEIVED</NavigationText>
            </NavigationItem>
          </NavigationButton>


          <NavigationButton onPress={this.toggleComponents}>
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
