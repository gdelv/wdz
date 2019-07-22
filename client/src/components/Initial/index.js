import React from 'react'
import Header from '../../common/components/Header'
import { Wrapper } from '../../common/styled'
import { ButtonContainer, InnerButtonContainer, Button, ButtonText } from './styled'

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
