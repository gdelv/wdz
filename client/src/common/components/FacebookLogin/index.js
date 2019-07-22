import React from 'react'
import { Container, Description, ButtonContainer, FacebookButton, FacebookIcon, ButtonText } from './styled'
import facebookIcon from '../../../assets/img/facebookIcon.svg'

const FacebookLogin = (props) => {
  return (
    <Container>
      <Description>
        {props.children}
      </Description>
      <ButtonContainer>
        <FacebookButton>
          <ButtonText>
            <FacebookIcon source={facebookIcon} />
            FACEBOOK
          </ButtonText>
        </FacebookButton>
      </ButtonContainer>
    </Container>
  )
}

export default FacebookLogin
