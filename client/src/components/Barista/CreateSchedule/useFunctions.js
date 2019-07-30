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
  const formatToCurrentDate = (num) => {
    const formattedNum = dayjs.unix(num).format('dddd, MMMM D YYYY')
    return formattedNum
  }
  const formatToCurrentTime = (num) => {
    const formattedNum = dayjs.unix(num).format('h : mm A')
    return formattedNum
  }
  const selectedDay = formatToCurrentDate(date.getTime() / 1000)
  const selectedStartTime = formatToCurrentTime(startTime.getTime() / 1000)
  const selectedEndTime = formatToCurrentTime(endTime.getTime() / 1000)

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
            mode='time'
            date={startTime}
            onDateChange={(startTime) => setDate(startTime)}
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
  return {
    renderCancelButton,
    renderSaveButton,
    renderDatePicker,
    renderStartTimePicker,
    renderEndTimePicker,
    selectedDay,
    selectedStartTime,
    selectedEndTime,
    toggleDatePicker,
    toggleStartTimePicker,
    toggleEndTimePicker
  }
}

export { useFunctions }
