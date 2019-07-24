import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  GREEN: 'rgb(26, 236, 134)',
  BLACK: 'rgb(0, 0, 0)',
  WHITE: 'rgb(255, 255, 255)',
  GREY: 'rgb(182, 182, 182)',
  GREY_LINE: 'rgb(195, 195, 195)',
  OFF_WHITE: 'rgba(255, 255, 255, 0.80)',
  SHADE: 'rgba(0, 0, 0, 0.3)',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_BOLD: 'Poppins-Bold',
}

const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme
