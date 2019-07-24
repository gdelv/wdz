import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Initial from './Initial'
import BaristaLogin from './BaristaLogin'
import CustomerLogin from './CustomerLogin'
import BaristaProfile from './Barista/BaristaProfile'
import CreateSchedule from './Barista/CreateSchedule'
import Notes from './Barista/Notes'
import Sent from './Barista/Notes/Sent'
import Received from './Barista/Notes/Received'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scene-wrapper">
        <Scene key="Initial" component={Initial} hideNavBar />
        <Scene key="BaristaLogin" component={BaristaLogin} hideNavBar />
        <Scene key="CustomerLogin" component={CustomerLogin} hideNavBar />
        <Scene key="BaristaProfile" component={BaristaProfile} hideNavBar />
        <Scene key="CreateSchedule" component={CreateSchedule} hideNavBar />
        <Scene key="Notes" component={Notes} hideNavBar initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
