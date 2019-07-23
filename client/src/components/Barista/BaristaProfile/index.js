import React from 'react'
import { Text } from 'react-native'
import { TopBar } from '../../../common'
import { Wrapper } from '../../../common/styled'


class BaristaProfile extends React.Component {

  render() {
    return (
      <Wrapper>
        <TopBar
          CancelText="CANCEL"
          Title="My Schedule"
        />
        <Text>This is the Barista's profile.</Text>
      </Wrapper>
    )
  }
}

export default BaristaProfile
