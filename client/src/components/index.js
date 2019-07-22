import React, { Component } from 'react'
import { Text, View } from 'react-native'

import RouterComponent from './Router'
import Theme from './Theme'


export class App extends Component {
  render() {
    return (
      <Theme>
        <RouterComponent />
      </Theme>
    )
  }
}

export default App
