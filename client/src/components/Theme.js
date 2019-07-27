import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

const theme = {
  GREEN: 'rgb(26, 236, 134)',
  BLACK: 'rgb(0, 0, 0)',
  WHITE: 'rgb(255, 255, 255)',
  GREY: 'rgb(182, 182, 182)',
  GREY_LINE: 'rgb(195, 195, 195)',
  OFF_WHITE: 'rgb(247, 247, 247)',
  SHADE: 'rgba(0, 0, 0, 0.3)',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_BOLD: 'Poppins-Bold',
}

const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
        />
        {props.children}
      </>
    </ThemeProvider>
  )
}

export default Theme
