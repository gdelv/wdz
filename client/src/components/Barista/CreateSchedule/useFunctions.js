import React, { useState } from 'react'
import { TouchableOpacity, DatePickerIOS } from 'react-native'
import { CancelText, SaveText, DatePickerWrapper } from './styled'
import dayjs from 'dayjs'

const useFunctions = () => {
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
  return {
    renderCancelButton,
    renderSaveButton,
    toggleDatePicker,
    selectedDay,
    renderDatePicker,
    toggleStartTimePicker,
    selectedStartTime,
    renderStartTimePicker,
    toggleEndTimePicker,
    selectedEndTime,
    renderEndTimePicker
  }
}

export default useFunctions
