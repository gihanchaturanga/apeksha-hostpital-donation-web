import React from 'react'
import ResponsiveDrawer from '../../common/AdminNav/AdminNav'
import { ThemeProvider, createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

const Dashboard = () => {

    const theme = createTheme({
        palette: {
            primary:{
                main: '#4C3B2B'
            }
        }
    })


  return (
    <>
        <ThemeProvider theme={theme}>
            <ResponsiveDrawer/>
        </ThemeProvider>
    </>
  )
}

export default Dashboard