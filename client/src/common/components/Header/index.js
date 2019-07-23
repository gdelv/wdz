import React from 'react'
import { Wrapper, Title } from './styled'

const Header = (props) => {
  return (
    <Wrapper>
      <Title>{props.children}</Title>
    </Wrapper>
  )
}

export { Header }
