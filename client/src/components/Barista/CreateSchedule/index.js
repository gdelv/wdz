import React from 'react'
import dayjs from 'dayjs'
import { TouchableOpacity, DatePickerIOS, ScrollView } from 'react-native'
import { TopBar, NavBar } from '../../../common'
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
    const { showDatePicker } = this.state
    if (!showDatePicker) {
      this.setState({ showDatePicker: true })
    }
    if (showDatePicker) {
      this.setState({ showDatePicker: false })
    }
  }
  toggleStartTimePicker = () => {
    const { showStartTimePicker } = this.state
    if (!showStartTimePicker) {
      this.setState({ showStartTimePicker: true })
    }
    if (showStartTimePicker) {
      this.setState({ showStartTimePicker: false })
    }
  }
  toggleEndTimePicker = () => {
    const { showEndTimePicker } = this.state
    if (!showEndTimePicker) {
      this.setState({ showEndTimePicker: true })
    }
    if (showEndTimePicker) {
      this.setState({ showEndTimePicker: false })
    }
  }
  renderDatePicker = () => {
    const { date, showDatePicker } = this.state
    if (showDatePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode='date'
            date={date}
            onDateChange={(date) => this.setState({ date })}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderStartTimePicker = () => {
    const { startTime, showStartTimePicker } = this.state
    if (showStartTimePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode='time'
            date={startTime}
            onDateChange={(startTime) => this.setState({ startTime })}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderEndTimePicker = () => {
    const { endTime, showEndTimePicker } = this.state
    if (showEndTimePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode='time'
            date={endTime}
            onDateChange={(endTime) => this.setState({ endTime })}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderCancelButton = () => {
    return (
      <TouchableOpacity>
        <CancelText>CANCEL</CancelText>
      </TouchableOpacity>
    )
  }
  renderSaveButton = () => {
    return (
      <TouchableOpacity>
        <SaveText>SAVE</SaveText>
      </TouchableOpacity>
    )
  }
  render() {
    const formatToCurrentDate = (num) =>
      dayjs.unix(num).format('dddd, MMMM D YYYY')
    const formatToCurrentTime = (num) => dayjs.unix(num).format('h : mm A')
    const selectedDay = formatToCurrentDate(this.state.date.getTime() / 1000)
    const selectedStartTime = formatToCurrentTime(
      this.state.startTime.getTime() / 1000
    )
    const selectedEndTime = formatToCurrentTime(
      this.state.endTime.getTime() / 1000
    )
    return (
      <React.Fragment>
        <Wrapper>
          <TopBar
            Title='Create Schedule'
            LeftSection={this.renderCancelButton()}
            RightSection={this.renderSaveButton()}
          />
          <ScrollView style={{ flex: 1 }}>
            <MainContainer>
              <ScheduleButton onPress={this.toggleDatePicker}>
                <SubContainer>
                  <InnerText>Date</InnerText>
                  <InnerText>{selectedDay}</InnerText>
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
          </ScrollView>
          <NavBar />
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default CreateSchedule
