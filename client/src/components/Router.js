import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Initial from './Initial'
import BaristaLogin from './Barista/BaristaLogin'
import CustomerLogin from './Customer/CustomerLogin'
import BaristaProfile from './Barista/BaristaProfile'
import CreateSchedule from './Barista/CreateSchedule'
import Notes from './Barista/Notes'
import CustomerHome from './Customer/CustomerHome'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="scene-wrapper">
        <Scene key="Initial" component={Initial} hideNavBar />
        <Scene key="BaristaLogin" component={BaristaLogin} hideNavBar />
        <Scene key="CustomerLogin" component={CustomerLogin} hideNavBar />
        <Scene key="BaristaProfile" component={BaristaProfile} hideNavBar />
        <Scene key="CreateSchedule" component={CreateSchedule} hideNavBar />
        <Scene key="Notes" component={Notes} hideNavBar />
        <Scene key="CustomerHome" component={CustomerHome} hideNavBar initial />

      </Scene>
    </Router>
  )
}

export default RouterComponent