import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TopBar } from '../../../common'
import {
  Wrapper,
  CancelText,
  SaveText,
  MainContainer,
  ScheduleButton,
  SubContainer,
  InnerText,
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
          <ScheduleButton>
            <SubContainer>
              <InnerText>Date</InnerText>
              <InnerText >Monday, March 28 2016</InnerText>
            </SubContainer>
          </ScheduleButton>
          <ScheduleButton>
            <SubContainer>
              <InnerText>Start Time</InnerText>
              <InnerText>7:00 AM</InnerText>
            </SubContainer>
          </ScheduleButton>
          <ScheduleButton>
            <SubContainer>
              <InnerText>End Time</InnerText>
              <InnerText>8:00 AM</InnerText>
            </SubContainer>
          </ScheduleButton>
          <ScheduleButton>
            <SubContainer>
              <InnerText>Break Start</InnerText>
              <InnerText>(optional)</InnerText>
            </SubContainer>
          </ScheduleButton>
          <ScheduleButton>
            <SubContainer>
              <InnerText>Break End</InnerText>
              <InnerText>(optional)</InnerText>
            </SubContainer>
          </ScheduleButton>
        </MainContainer>
      </Wrapper >
    )
  }
}

export default CreateSchedule
