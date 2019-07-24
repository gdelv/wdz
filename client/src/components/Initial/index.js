import React from 'react'
import { Actions } from 'react-native-router-flux'
import coffeeMug from '../../assets/img/coffee-mug.png'
import {
  Wrapper,
  TitleContainer,
  Title,
  SecondaryContainer,
  SecondaryText,
  ButtonContainer,
  InnerButtonContainer,
  Button,
  ButtonText,
  DividerContainer,
  Divider,
  CoffeeMug
} from './styled'

const Initial = () => {
  navigateToCustomerLogin = () => Actions.CustomerLogin()
  navigateToBaristaLogin = () => Actions.BaristaLogin()
  return (
    <Wrapper>
      <TitleContainer>
        <Title adjustsFontSizeToFit numberOfLines={1}>
          Let's sign you up!
        </Title>
      </TitleContainer>
      <SecondaryContainer>
        <SecondaryText>
          I am a...
        </SecondaryText>
      </SecondaryContainer>
      <ButtonContainer>
        <InnerButtonContainer>
          <Button onPress={navigateToBaristaLogin}>
            <ButtonText>
              BARISTA
          </ButtonText>
          </Button>
        </InnerButtonContainer>
        <DividerContainer>
          <Divider />
          <CoffeeMug source={coffeeMug} />
          <Divider />
        </DividerContainer>
        <InnerButtonContainer>
          <Button onPress={navigateToCustomerLogin}>
            <ButtonText>
              CUSTOMER
          </ButtonText>
          </Button>
        </InnerButtonContainer>
      </ButtonContainer>
    </Wrapper>
  )
}

export default Initial
