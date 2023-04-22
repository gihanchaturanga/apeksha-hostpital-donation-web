import React from "react";
import NewTextField from "../../common/TextField/NewTextField";
import { Grid, Button } from "@mui/material";
import "./Login.css";
import logo from "../../resources/logo/VolunteerSL(dark).png";

export const Login = () => {
  return (
    <Grid container direction="row" className="main-container">
      <Grid item xs={12} md={5} className="login-section grid-item">
        <img id="logo" src={logo} alt="Volunteer Logo" />
        <span className="main-txt">Volunteer Sri Lanka</span>
        <div className="container">
          <div className="login-field">
            {/* <label htmlFor="email">E-mail</label> */}
            <NewTextField
              label="E-mail"
              id="email"
              placeholder="abc@gmail.com"
              name="email"
            />
          </div>
          <div className="login-field">
            {/* <label htmlFor="password">Password</label> */}
            <NewTextField
              label="Password"
              id="password"
              type="password"
              placeholder="Your Password"
              name="password"
            />
          </div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4C3B2BF0", color: "#F6EDE4" }}
          >
            Login
          </Button>
        </div>
      </Grid>
      <Grid item xs={{ display: "none" }} md className="img grid-item"></Grid>
    </Grid>
  );
};
