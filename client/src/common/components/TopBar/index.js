import React from 'react'
import {
  Wrapper,
  LeftSection,
  MiddleSection,
  RightSection,
  Title
} from './styled'

const TopBar = () => {
  return (
    <Wrapper>
      <LeftSection>{this.props.LeftSection}</LeftSection>
      <MiddleSection>
        <Title adjustsFontSizeToFit numberOfLines={1}>
          {this.props.Title}
        </Title>
      </MiddleSection>
      <RightSection>{this.props.RightSection}</RightSection>
    </Wrapper>
  )
}

export { TopBar }
