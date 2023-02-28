import React from "react";
import ResponsiveAppBar from "../top_nav/TopNav";
import Grid from '@mui/material/Grid';

function RenderHome(){
    return(
        <div >
            <ResponsiveAppBar/>
            <Grid container sx={{backgroundColor:"F7EDE4"}}>
                <Grid xs={12} md={6}>
                    <Item><img src="../resources/images/main.jpg"/></Item>
                </Grid>
                <Grid xs={12} md={6}>
                    <Item></Item>
                </Grid>
            </Grid>
        </div>
    );
}
export default ResponsiveAppBar;