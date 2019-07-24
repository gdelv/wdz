import React from 'react'
import BaristaList from './BaristaList'
import { ScrollView } from 'react-native'
import { TopBar } from '../../../common'
import {
  Wrapper
} from './styled'


// Create a Barista Card component for single card baristas.
// Create a Barista List component for the barista List view.


const CustomerHome = () => {
  return (
    <Wrapper>
      <TopBar
        Title="Barista"
      />
      <ScrollView>
        <BaristaList />
      </ScrollView>
    </Wrapper>
  )
}

export default CustomerHome
