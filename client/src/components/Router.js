import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Initial from './Initial'
import BaristaLogin from './BaristaLogin'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scene-wrapper">
        <Scene key="Initial" component={Initial} hideNavBar />
        <Scene key="BaristaLogin" component={BaristaLogin} hideNavBar initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
