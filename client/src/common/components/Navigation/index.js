import React from 'react'
import { ButtonWrapper, Button, ButtonText } from './styled'

const Navigation = (props) => {
  return (
    <ButtonWrapper>
      <Button>
        <ButtonText>{props.children}</ButtonText>
      </Button>
    </ButtonWrapper>
  )
}

export { Navigation }
