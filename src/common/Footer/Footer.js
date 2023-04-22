import React from "react";
import { Grid, Button } from "@mui/material";
import "./Footer.css";
import logo from "../../resources/logo/VolunteerSL(white).png";
import NewTextField from "../TextField/NewTextField";
import { Link } from "react-router-dom";
import facebook from "../../resources/logo/facebook.png";
import instagram from "../../resources/logo/instagram.png";
import linkedin from "../../resources/logo/linkedin.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Grid container display="flex" direction={{ xs: "column", md: "row" }}>
        <Grid sx={{ m: "20px", mx: "40px" }} flex="0.5">
          <h1 className="brand-footer">Volunteer Sri Lanka</h1>
          <p>
            Volunteer Sri Lanka is a non-profit organization providing relief
            and development services for Sri Lankan citizens.
          </p>
          <h3
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              fontFamily: "ItimBold",
            }}
          >
            Stay in Touch
          </h3>
          <div>
            <label htmlFor="email">Email Address:</label>
            <NewTextField
              sx={{ backgroundColor: "white" }}
              type="email"
              name="subscriber_mail"
              required
            />
            <Button
              id="subscribe_btn"
              sx={{
                color: "black",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              Subscribe
            </Button>
          </div>
        </Grid>
        <Grid
          sx={{ m: "20px", mx: "40px" }}
          flex="0.5"
        >
          <div className="flex-container">
            <div>
              <img
                id="footer-logo"
                src={logo}
                alt="Volunteer Logo"
                className="logo-1"
              />
            </div>
            {/* <div>
              <img
                id="footer-logo"
                src={logo}
                alt="Volunteer Logo"
                className="logo-1"
              />
            </div>
            <div>
              <img
                id="footer-logo"
                src={logo}
                alt="Volunteer Logo"
                className="logo-1"
              />
            </div> */}
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <div>
              <Link to="https://www.facebook.com/volunteersrilanka.lk/?mibextid=ZbWKwL">
                <img
                  src={facebook}
                  alt="facebook Logo"
                  className="logo-social"
                />
              </Link>
              <Link to="https://www.linkedin.com/company/volunteer-sri-lanka/">
                <img
                  src={linkedin}
                  alt="linkedin Logo"
                  className="logo-social"
                />
              </Link>
              <Link to="https://instagram.com/volunteersl?igshid=YmMyMTA2M2Y= ">
                <img
                  src={instagram}
                  alt="instagram Logo"
                  className="logo-social"
                />
              </Link>
            </div>
            <div>
              <h6>Call Us: +94 76 3049683</h6>
              <Link to="" className="links">
                Terms and Conditions
              </Link>{" "}
              |{" "}
              <Link to="" className="links">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link to="" className="links">
                About Us
              </Link>
              <p>Copyright © 2023</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
