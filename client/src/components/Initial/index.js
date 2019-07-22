import React from 'react'
import { View, Text } from 'react-native'

import Header from '../common/Header'
import { Wrapper, ButtonContainer, InnerButtonContainer, Button, ButtonText } from './styled'

const Initial = () => {
  return (
    <Wrapper>
      <Header>
        I am a...
      </Header>
      <ButtonContainer>
        <InnerButtonContainer>
          <Button>
            <ButtonText>Customer</ButtonText>
          </Button>
          <Button>
            <ButtonText>
              Barista
          </ButtonText>
          </Button>
        </InnerButtonContainer>
      </ButtonContainer>
    </Wrapper>
  )
}

export default Initial
