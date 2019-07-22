import React, { Component } from 'react'

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
