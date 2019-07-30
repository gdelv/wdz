import React from 'react'
import { ScrollView } from 'react-native'
import {
  Wrapper,
  View_Container,
  View_Text,
  Text_Title,
  Text_SubText,
  View_Button,
  Button
} from './styled'

const Sent = () => {
  return (
    <Wrapper>
      <ScrollView>
        <View_Container>
          <View_Text>
            <Text_Title>No Notes Yet ☹️ </Text_Title>
            <Text_SubText>
              Send a note to your favorite customers and it will show up here.
            </Text_SubText>
          </View_Text>
        </View_Container>
      </ScrollView>
    </Wrapper>
  )
}

export default Sent
