import React from "react";
import ResponsiveAppBar from "../../common/top_nav/TopNav";
import "./Main.css";
import { Grid } from "@mui/material";
import { Height } from "@mui/icons-material";

function RenderHome() {
  return (
    <div container direction="column" className="main-container">
      <ResponsiveAppBar />
      <Grid container xs={12} className="body-container" direction="row">
        <Grid item xs={8} className="bg-img"></Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
export default RenderHome;
