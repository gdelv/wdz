import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CenterViewWrapper } from './styled'

import Theme from './Theme'


export class App extends Component {
  render() {
    return (
      <Theme>
        <CenterViewWrapper>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
        </CenterViewWrapper>
      </Theme>
    )
  }
}

export default App
