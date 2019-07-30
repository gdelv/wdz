import React from 'react'
import {
  Wrapper,
  ButtonWrapper,
  LeftSection,
  MiddleSection,
  RightSection,
  Title
} from './styled'

const TopBar = (props) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <LeftSection>{props.Left}</LeftSection>
      </ButtonWrapper>
      <MiddleSection>
        <Title adjustsFontSizeToFit numberOfLines={1}>
          {props.Title}
        </Title>
      </MiddleSection>
      <ButtonWrapper onPress={props.RightSectionOnPress}>
        <RightSection>{props.RightSection}</RightSection>
      </ButtonWrapper>
    </Wrapper>
  )
}

export { TopBar }
