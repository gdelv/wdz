import React from 'react'
import { Text } from 'react-native'
import { Wrapper, LeftSection, MiddleSection, RightSection, Title, PlusIcon } from './styled'
import plusIcon from '../../../assets/img/plus-icon.png'

class TopBar extends React.Component {
  state = {
    showPlusIcon: true
  }
  renderPlusIcon = () => {
    if (this.state.showPlusIcon) {
      return (
        <PlusIcon
          source={plusIcon}
        />
      )
    }
  }
  render() {
    return (
      <Wrapper>
        <LeftSection>
          <Text>LEFT</Text>
        </LeftSection>
        <MiddleSection>
          <Title
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            {this.props.Title}
          </Title>
        </MiddleSection>
        <RightSection>
          {this.renderPlusIcon()}
        </RightSection>
      </Wrapper>
    )
  }
}

// conditional rendering.
// i want to pass the plusicon as a boolean through.
// if the showplusicon is true i would show it
// but if it's false than i would hide the plusicon

// I can pass a prop down as 'this.props.isPlusIcon'

export { TopBar }
