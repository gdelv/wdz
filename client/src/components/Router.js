import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Initial from './Initial'
import BaristaLogin from './BaristaLogin'
import CustomerLogin from './CustomerLogin'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scene-wrapper">
        <Scene key="Initial" component={Initial} hideNavBar initial />
        <Scene key="BaristaLogin" component={BaristaLogin} hideNavBar />
        <Scene key="CustomerLogin" component={CustomerLogin} hideNavBar />
      </Scene>
    </Router>
  )
}

export default RouterComponent
