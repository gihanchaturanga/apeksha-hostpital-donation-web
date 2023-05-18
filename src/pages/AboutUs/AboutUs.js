import React from "react";
import ResponsiveAppBar from "../../common/TopNav/TopNav";
import { Footer } from "../../common/Footer/Footer";
import Typography from "@mui/material/Typography";
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <div className="about-outer-container">
      <ResponsiveAppBar />
      <div className="about-body-container">
      <Typography
            variant="h3"
            component="div"
            sx={{
              ml: 2,
              mb: 5,
              mt: 5,
              fontFamily: "ItimBold",
              fontWeight: 900,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            About Us
          </Typography>
      </div>
      <Footer />
    </div>
  );
};
