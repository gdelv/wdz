import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Initial from './Initial'
import BaristaLogin from './BaristaLogin'
import CustomerLogin from './CustomerLogin'
import BaristaProfile from './Barista/BaristaProfile'


// Create a helper react component for drilling props down.

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scene-wrapper">
        <Scene key="Initial" component={Initial} hideNavBar />
        <Scene key="BaristaLogin" component={BaristaLogin} hideNavBar />
        <Scene key="CustomerLogin" component={CustomerLogin} hideNavBar />
        <Scene key="BaristaProfile" component={BaristaProfile} hideNavBar initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
