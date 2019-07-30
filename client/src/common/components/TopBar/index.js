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
      <ButtonWrapper onPress={props.LeftSectionOnPress}>
        <LeftSection>{props.LeftSection}</LeftSection>
      </ButtonWrapper>
      <ButtonWrapper>
        <MiddleSection>
          <Title adjustsFontSizeToFit numberOfLines={1}>
            {props.Title}
          </Title>
        </MiddleSection>
      </ButtonWrapper>
      <ButtonWrapper>
        <RightSection>{props.RightSection}</RightSection>
      </ButtonWrapper>
    </Wrapper>
  )
}

export { TopBar }
