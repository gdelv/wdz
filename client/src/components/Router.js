import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import Initial from './Initial'

import styled from 'styled-components'

const Wrapper = styled.View`
  background-color: ${props => props.theme.GREEN};
  height: 100%;
`


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
