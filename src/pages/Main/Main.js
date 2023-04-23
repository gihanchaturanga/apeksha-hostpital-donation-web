import React from "react";
import ResponsiveAppBar from "../../common/TopNav/TopNav";
import "./Main.css";
import { Grid, Button } from "@mui/material";
import { Footer } from "../../common/Footer/Footer";

function RenderHome() {
  return (
    <div>
      <div container direction="column" className="outer-container">
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
      <Footer />
    </div>
  );
}
export default RenderHome;
