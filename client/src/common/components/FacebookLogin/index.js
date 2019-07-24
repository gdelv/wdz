import React from 'react'
import { Container, InnerContainer, Description, ButtonContainer, FacebookButton, FacebookIcon, ButtonText } from './styled'
import facebookIcon from '../../../assets/img/iconFacebookWhite.png'

const FacebookLogin = (props) => {
  return (
    <Container>
      <InnerContainer>
        <Description adjustsFontSizeToFit numberOfLines={4}>
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
      </InnerContainer>
    </Container>
  )
}

export { FacebookLogin }
