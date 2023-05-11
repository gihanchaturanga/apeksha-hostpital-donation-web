import React from 'react'
import ResponsiveDrawer from '../../common/AdminNav/AdminNav'
import { Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import { amber, blueGrey, brown, deepOrange, green, grey, orange } from '@mui/material/colors'
import SimpleInfo from './SimpleInfo';

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
            <Grid container spacing={2}>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfo title={'Number of members'} value={2540} sx={{backgroundColor: 'secondary.light'}}/>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfo title={'Number of members'} value={2540} sx={{backgroundColor: 'warning.light'}}/>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfo title={'Number of members'} value={2540} sx={{backgroundColor: 'success.light'}}/>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <SimpleInfo title={'Number of members'} value={2540} sx={{backgroundColor: 'error.light'}}/>
                </Grid>
            </Grid>
            </ResponsiveDrawer>
            
        </ThemeProvider>
    </>
  )
}

export default Dashboard