import React from 'react'
import moment from 'moment'
import { TouchableOpacity, DatePickerIOS } from 'react-native'
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
  state = {
    showDatePicker: false,
    date: new Date()
  }
  toggleDatePicker = () => {
    if (!this.state.showDatePicker) {
      this.setState({ showDatePicker: true })
    }
    if (this.state.showDatePicker) {
      this.setState({ showDatePicker: false })
    }
  }
  renderDatePicker = () => {
    if (this.state.showDatePicker) {
      return <DatePickerIOS mode="date" date={this.state.date} />
    }
    if (!this.state.showDatePicker) {
      return null
    }
  }
  render() {
    const dayOfWeek = (num) => moment.unix(num).format('dddd, MMMM D YYYY')
    const y = dayOfWeek(this.state.date.getTime() / 1000)
    return (
      <Wrapper>
        <TopBar
          Title="Create Schedule"
          LeftSection={this.renderCancelButton()}
          RightSection={this.renderSaveButton()}
        />
        <MainContainer>
          <ScheduleButton onPress={this.toggleDatePicker}>
            <SubContainer>
              <InnerText>Date</InnerText>
              <InnerText>
                {y}
              </InnerText>
            </SubContainer>
          </ScheduleButton>
          {/* <DatePickerIOS date={this.state.date} /> */}
          {this.renderDatePicker()}
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
}

export default CreateSchedule
