import React from 'react'
import { ScrollView } from 'react-native'
import { Wrapper, View_Container, Text_Title, Text_Subtext } from './styled'

const Received = () => {
  return (
    <Wrapper>
      <ScrollView>
        <View_Container>
          <Text_Title adjustsFontSizeToFit numberOfLines={1}>
            Check back later!
          </Text_Title>
          <Text_Subtext>
            Notes from your customers will show up here. 🥰
          </Text_Subtext>
        </View_Container>
      </ScrollView>
    </Wrapper>
  )
}

export default Received
