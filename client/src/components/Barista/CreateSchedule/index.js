import React from 'react'
import dayjs from 'dayjs'
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
  DatePickerWrapper
} from './styled'

class CreateSchedule extends React.Component {
  state = {
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    showDatePicker: false,
    showStartTimePicker: false,
    showEndTimePicker: false
  }
  toggleDatePicker = () => {
    if (!this.state.showDatePicker) {
      this.setState({ showDatePicker: true })
    }
    if (this.state.showDatePicker) {
      this.setState({ showDatePicker: false })
    }
  }
  toggleStartTimePicker = () => {
    if (!this.state.showStartTimePicker) {
      this.setState({ showStartTimePicker: true })
    }
    if (this.state.showStartTimePicker) {
      this.setState({ showStartTimePicker: false })
    }
  }
  toggleEndTimePicker = () => {
    if (!this.state.showEndTimePicker) {
      this.setState({ showEndTimePicker: true })
    }
    if (this.state.showEndTimePicker) {
      this.setState({ showEndTimePicker: false })
    }
  }
  renderDatePicker = () => {
    if (this.state.showDatePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode="date"
            date={this.state.date}
            onDateChange={(date) => this.setState({ date })}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderStartTimePicker = () => {
    if (this.state.showStartTimePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode="time"
            date={this.state.startTime}
            onDateChange={(startTime) => this.setState({ startTime })}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderEndTimePicker = () => {
    if (this.state.showEndTimePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode="time"
            date={this.state.startTime}
            onDateChange={(endTime) => this.setState({ endTime })}
          />
        </DatePickerWrapper>
      )
    }
  }

  render() {
    const formatToCurrentDate = (num) => dayjs.unix(num).format('dddd, MMMM D YYYY')
    const formatToCurrentTime = (num) => dayjs.unix(num).format('h : mm A')
    const selectedDay = formatToCurrentDate(this.state.date.getTime() / 1000)
    const selectedStartTime = formatToCurrentTime(this.state.startTime.getTime() / 1000)
    const selectedEndTime = formatToCurrentTime(this.state.endTime.getTime() / 1000)
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
                {selectedDay}
              </InnerText>
            </SubContainer>
          </ScheduleButton>
          {this.renderDatePicker()}
          <ScheduleButton onPress={this.toggleStartTimePicker}>
            <SubContainer>
              <InnerText>Start Time</InnerText>
              <InnerText>{selectedStartTime}</InnerText>
            </SubContainer>
          </ScheduleButton>
          {this.renderStartTimePicker()}
          <ScheduleButton onPress={this.toggleEndTimePicker}>
            <SubContainer>
              <InnerText>End Time</InnerText>
              <InnerText>{selectedEndTime}</InnerText>
            </SubContainer>
          </ScheduleButton>
          {this.renderEndTimePicker()}
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
