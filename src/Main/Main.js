import React from "react";
import ResponsiveAppBar from "../top_nav/TopNav";
import Grid from '@mui/material/Grid';

function RenderHome(){
    
    return(
        <div >
            <ResponsiveAppBar/>
            <Grid container sx={{backgroundColor:"F7EDE4", height:"100%"}}>
                <Grid item xs={12} md={6} sx={{backgroundColor:"red"}}>
                    <img src="../resources/images/main.jpg"/>
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
            </Grid>
        </div>
    );
}
export default ResponsiveAppBar;