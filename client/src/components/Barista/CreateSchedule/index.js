import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TopBar } from '../../../common'
import {
  Wrapper,
  CancelText,
  SaveText,
  MainContainer,
  SubContainer,
  InnerText
} from './styled'

class CreateSchedule extends React.Component {
  renderCancelButton = () => {
    return (
      <TouchableOpacity>
        <CancelText>
          CANCEL
        </CancelText>
      </TouchableOpacity>
    )
  }
  renderSaveButton = () => {
    return (
      <TouchableOpacity>
        <SaveText>
          SAVE
        </SaveText>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <Wrapper>
        <TopBar
          Title="Create Schedule"
          LeftSection={this.renderCancelButton()}
          RightSection={this.renderSaveButton()}
        />
        <MainContainer>
          <SubContainer>
            <InnerText>Date</InnerText>
            <InnerText >Monday, March 28 2016</InnerText>
          </SubContainer>
          <SubContainer>
            <InnerText>Start Time</InnerText>
            <InnerText>7:00 AM</InnerText>
          </SubContainer>
          <SubContainer>
            <InnerText>End Time</InnerText>
            <InnerText>8:00 AM</InnerText>
          </SubContainer>
          <SubContainer>
            <InnerText>Break Start</InnerText>
            <InnerText>(optional)</InnerText>
          </SubContainer>
          <SubContainer>
            <InnerText>Break End</InnerText>
            <InnerText>(optional)</InnerText>
          </SubContainer>
        </MainContainer>
      </Wrapper >
    )
  }
}

export default CreateSchedule
