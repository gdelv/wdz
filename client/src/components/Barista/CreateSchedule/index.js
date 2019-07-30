import React from 'react'
import { useFunctions } from './useFunctions'
import { ScrollView } from 'react-native'
import { TopBar, NavBar } from '../../../common'
import {
  Wrapper,
  MainContainer,
  ScheduleButton,
  SubContainer,
  InnerText
} from './styled'

const CreateSchedule = () => {
  const {
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
  } = useFunctions()
  return (
    <React.Fragment>
      <Wrapper>
        <TopBar
          Title='Create Schedule'
          LeftSection={renderCancelButton()}
          RightSection={renderSaveButton()}
        />
        <ScrollView>
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
