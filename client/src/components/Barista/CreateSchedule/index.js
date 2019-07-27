import React, { useState } from 'react'
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

const CreateSchedule = () => {
  const [date, setDate] = useState(new Date())
  const [startTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showStartTimePicker, setShowStartTimePicker] = useState(false)
  const [showEndTimePicker, setShowEndTimePicker] = useState(false)
  toggleDatePicker = () => {
    !showDatePicker ? setShowDatePicker(true) : null
    showDatePicker ? setShowDatePicker(false) : null
  }
  toggleStartTimePicker = () => {
    !showStartTimePicker ? setShowStartTimePicker(true) : null
    showStartTimePicker ? setShowStartTimePicker(false) : null
  }
  toggleEndTimePicker = () => {
    !showEndTimePicker ? setShowEndTimePicker(true) : null
    showEndTimePicker ? setShowEndTimePicker(false) : null
  }
  renderDatePicker = () => {
    if (showDatePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode='date'
            date={date}
            onDateChange={(date) => setDate(date)}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderStartTimePicker = () => {
    if (showStartTimePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode='date'
            date={date}
            onDateChange={(date) => setDate(date)}
          />
        </DatePickerWrapper>
      )
    }
  }
  renderEndTimePicker = () => {
    if (showEndTimePicker) {
      return (
        <DatePickerWrapper>
          <DatePickerIOS
            mode='time'
            date={endTime}
            onDateChange={(endTime) => setEndTime(endTime)}
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
  const formatToCurrentDate = (num) =>
    dayjs.unix(num).format('dddd, MMMM D YYYY')
  const formatToCurrentTime = (num) => dayjs.unix(num).format('h : mm A')
  const selectedDay = formatToCurrentDate(date.getTime() / 1000)
  const selectedStartTime = formatToCurrentTime(startTime.getTime() / 1000)
  const selectedEndTime = formatToCurrentTime(endTime.getTime() / 1000)
  return (
    <React.Fragment>
      <Wrapper>
        <TopBar
          Title='Create Schedule'
          LeftSection={renderCancelButton()}
          RightSection={renderSaveButton()}
        />
        <ScrollView style={{ flex: 1 }}>
          <MainContainer>
            <ScheduleButton onPress={toggleDatePicker}>
              <SubContainer>
                <InnerText>Date</InnerText>
                <InnerText>{selectedDay}</InnerText>
              </SubContainer>
            </ScheduleButton>
            {renderDatePicker()}
            <ScheduleButton onPress={toggleStartTimePicker}>
              <SubContainer>
                <InnerText>Start Time</InnerText>
                <InnerText>{selectedStartTime}</InnerText>
              </SubContainer>
            </ScheduleButton>
            {renderStartTimePicker()}
            <ScheduleButton onPress={toggleEndTimePicker}>
              <SubContainer>
                <InnerText>End Time</InnerText>
                <InnerText>{selectedEndTime}</InnerText>
              </SubContainer>
            </ScheduleButton>
            {renderEndTimePicker()}
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

export default CreateSchedule
