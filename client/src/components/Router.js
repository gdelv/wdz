import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Initial from './Initial'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scene-wrapper">
        <Scene key="initial" component={Initial} hideNavBar>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
