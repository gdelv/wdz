import React, { useState, useEffect } from 'react'
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

const Notes_Barista = () => {
  const [isSentBarActive, setIsSentBarActive] = useState(false)
  const [isReceivedBarActive, setIsReceivedBarActive] = useState(true)
  const [receivedBarStatus, setReceivedBarStatus] = useState('active')
  const [sentBarStatus, setSentBarStatus] = useState(null)

  renderComponent = () => {
    if (isSentBarActive) {
      return <Sent />
    }
    if (isReceivedBarActive) {
      return <Received />
    }
  }
  toggleSentBar = () => {
    if (isSentBarActive) {
      null
    }
    if (!isSentBarActive) {
      setIsSentBarActive(true)
      setIsReceivedBarActive(false)
      setReceivedBarStatus(null)
      setSentBarStatus('active')
    }
  }
  toggleReceivedBar = () => {
    if (isReceivedBarActive) {
    }
    if (!isReceivedBarActive) {
      setIsReceivedBarActive(true)
      setIsSentBarActive(false)
      setSentBarStatus(null)
      setReceivedBarStatus('active')
    }
  }
  return (
    <Wrapper>
      <TopBar Title='PS Notes' />
      <Navigation>
        <NavigationButton onPress={toggleReceivedBar}>
          <NavigationItem active={receivedBarStatus}>
            <NavigationText active={receivedBarStatus}>RECEIVED</NavigationText>
          </NavigationItem>
        </NavigationButton>

        <NavigationButton onPress={toggleSentBar}>
          <NavigationItem active={sentBarStatus}>
            <NavigationText active={sentBarStatus}>SENT</NavigationText>
          </NavigationItem>
        </NavigationButton>
      </Navigation>

      <ScrollView>
        <BottomContainer>{renderComponent()}</BottomContainer>
      </ScrollView>
      <NavBar />
    </Wrapper>
  )
}

export default Notes_Barista
