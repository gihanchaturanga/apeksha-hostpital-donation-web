import React from "react";
import ResponsiveAppBar from "../../common/top_nav/TopNav";
import "./Main.css";
import { Grid, Button } from "@mui/material";

function RenderHome() {
  return (
    <div container direction="column" className="main-container">
      <ResponsiveAppBar />
      <Grid container xs={12} className="body-container">
        <Grid item xs={12} sm={7} md={8} className="bg-img"></Grid>
        <Grid display="flex" className="text-box" direction="column" item xs>
          <h1 className="main-text">Your Donations</h1>
          <p className="main-text">Have the Power to</p>
          <h4 className="main-text">Make a Difference..!</h4>
          <Button variant="outlined" id="donate-btn">
            CONTRIBUTE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default RenderHome;
