import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  GREEN: 'rgb(26, 236, 134)',
  BLACK: 'rgb(0, 0, 0)',
  WHITE: 'rgb(255, 255, 255)',
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_MEDIUM: 'Poppins-Medium'
}



const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme
