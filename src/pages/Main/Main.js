import React from "react";
import ResponsiveAppBar from "../../common/TopNav/TopNav";
import "./Main.css";
import { Button, Grid } from "@mui/material";
import { Footer } from "../../common/Footer/Footer";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { DonateComponent } from "../../common/DonateComponent/DonateComponent";

function RenderHome() {
  return (
    <div>
      <div container direction="column" className="main-outer-container">
        <ResponsiveAppBar />
        <Grid container xs={12} className="main-body-container">
          <Grid item xs={12} sm={7} md={8} className="bg-img"></Grid>
          <Grid display="flex" className="text-box" direction="column" item xs>
            <h1 className="main-text">Your Donations</h1>
            <p className="main-text">Have the Power to</p>
            <h4 className="main-text">Make a Difference..!</h4>
            <Button
              variant="outlined"
              startIcon={<VolunteerActivismIcon />}
              id="donate-btn"
            >
              DONATE
            </Button>
          </Grid>
        </Grid>
      </div>

      <Grid className="main-page-card-wrpper">
        <center>
          <DonateComponent/>
        </center>
        {/* TODO: Check the responsiveness and content */}
      </Grid>

      <Footer />
    </div>
  );
}
export default RenderHome;
