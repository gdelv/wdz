import React from 'react'
import {
  Wrapper,
  LeftSection,
  MiddleSection,
  RightSection,
  Title
} from './styled'

const TopBar = (props) => {
  return (
    <Wrapper>
      <LeftSection>{props.LeftSection}</LeftSection>
      <MiddleSection>
        <Title adjustsFontSizeToFit numberOfLines={1}>
          {props.Title}
        </Title>
      </MiddleSection>
      <RightSection>{props.RightSection}</RightSection>
    </Wrapper>
  )
}

export { TopBar }
