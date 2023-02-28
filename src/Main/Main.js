import React from "react";
import ResponsiveAppBar from "../top_nav/TopNav";
import Grid from '@mui/material/Grid';

function RenderHome(){
    return(
        <div >
            <ResponsiveAppBar/>
            <Grid container sx={{backgroundColor:"F7EDE4"}}>
                <Grid xs={6}>
                    <img alt="main.image"></img>
                </Grid>
                <Grid xs={6}></Grid>
            </Grid>
        </div>
    );
}
export default ResponsiveAppBar;