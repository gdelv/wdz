import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Header } from '../../common'
import { Wrapper } from '../../common/styled'
import { ButtonContainer, InnerButtonContainer, Button, ButtonText } from './styled'

const Initial = () => {
  navigateToCustomerLogin = () => Actions.CustomerLogin()
  navigateToBaristaLogin = () => Actions.BaristaLogin()
  return (
    <Wrapper>
      <Header>
        I am a...
      </Header>
      <ButtonContainer>
        <InnerButtonContainer>
          <Button onPress={navigateToCustomerLogin}>
            <ButtonText>Customer</ButtonText>
          </Button>
          <Button onPress={navigateToBaristaLogin}>
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
