import React from 'react'
import { ScrollView } from 'react-native'
import {
  Wrapper,
  View_Container,
  View_Text,
  Text_Title,
  Text_SubText,
  View_Button,
  Button,
  Text_Button
} from './styled'

const Sent = () => {
  return (
    <Wrapper>
      <ScrollView>
        <View_Container>
          <View_Text>
            <Text_Title>No Notes Yet 🥺</Text_Title>
            <Text_SubText adjustsFontSizeToFit numberOfLines={2}>
              Send a note to your favorite customers and it will show up here.
            </Text_SubText>
            <View_Button>
              <Button>
                <Text_Button>NEW NOTE</Text_Button>
              </Button>
            </View_Button>
          </View_Text>
        </View_Container>
      </ScrollView>
    </Wrapper>
  )
}

export default Sent
