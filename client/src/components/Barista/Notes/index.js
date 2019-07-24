import React from 'react'
import { TopBar } from '../../../common'
import { TouchableOpacity } from 'react-native'
import {
  Wrapper,
  Navigation,
  NavigationButton,
  NavigationItem,
  NavigationText
} from './styled'

const Notes = (props) => {
  return (
    <Wrapper>
      <TopBar
        Title="PS Notes"
      />
      <Navigation>
        <NavigationButton>
          <NavigationItem>
            <NavigationText>RECEIVED</NavigationText>
          </NavigationItem>
        </NavigationButton>
        <NavigationButton>
          <NavigationItem>
            <NavigationText>SENT</NavigationText>
          </NavigationItem>
        </NavigationButton>
      </Navigation>
    </Wrapper>
  )
}

export default Notes
