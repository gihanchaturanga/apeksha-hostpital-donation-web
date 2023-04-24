import React from 'react'
import ResponsiveDrawer from '../../common/AdminNav/AdminNav'
import { ThemeProvider, Typography, createTheme } from '@mui/material'
import { amber, blueGrey, brown, deepOrange, green, grey, orange } from '@mui/material/colors'

const Dashboard = () => {

    const theme = createTheme({
        palette: {
            primary:{
                light: brown[600],
                main: brown[800],
                dark: brown[900]
            },
            secondary:{
                light: blueGrey[500],
                main: blueGrey[700],
                dark: blueGrey[800]

            },
            success: {
                light: green[600],
                main: green[700],
                dark: green[800]
            },
            warning:{
                light: amber[400],
                main: amber[600],
                dark: amber[800]
            },
            error: {
                light: deepOrange[800],
                main: '#dd2c00',
                dark: deepOrange[900]
            }
        }
    })


  return (
    <>
        <ThemeProvider theme={theme}>
            <ResponsiveDrawer>
            <Typography variant='h1' color={'primary.light'}>Here we go</Typography>
            </ResponsiveDrawer>
            
        </ThemeProvider>
    </>
  )
}

export default Dashboard