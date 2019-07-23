import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Wrapper, LeftSection, MiddleSection, RightSection, CancelText, Title, PlusIcon } from './styled'
import plusIcon from '../../../assets/img/plus-icon.png'

class TopBar extends React.Component {
  state = {
    showPlusIcon: false,
    showCancelButton: false
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
  renderCancelButton = () => {
    if (this.state.showCancelButton) {
      return (
        <TouchableOpacity>
          <CancelText>
            {this.props.CancelText}
          </CancelText>
        </TouchableOpacity>
      )
    }
  }
  render() {
    return (
      <Wrapper>
        <LeftSection>
          {this.props.LeftSection}
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
          {this.props.RightSection}
        </RightSection>
      </Wrapper>
    )
  }
}

export { TopBar }
