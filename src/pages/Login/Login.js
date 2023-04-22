import React from "react";
import NewTextField from "../../common/TextField/NewTextField";
import { Grid, Button, Box } from "@mui/material";
import "./Login.css";
import logo from "../../resources/logo/VolunteerSL(dark).png";

export const Login = () => {
  return (
    <Grid container direction="row" className="main-container">
      <Grid item xs={12} md={5} className="login-section grid-item">
        <div className="header-container">
          <img id="logo" src={logo} alt="Volunteer Logo" />
          <span className="main-txt">Volunteer Sri Lanka</span>
        </div>
        <div className="field-container">
          <div className="login-field">
            <h1>Welcome!</h1>
            <p>This login is for Volunteer members only.</p>
          </div>
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
            <a href="xxxxx" style={{textDecoration:"none"}}>Forget Password?</a>
          </div>
          <div className="login-field">
            <Button
              variant="contained"
              sx={{
                width: "100px",
                backgroundColor: "#4C3B2BF0",
                color: "#F6EDE4",
                marginBottom: "20px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={{ display: "none" }} md className="grid-item" sx={{paddingTop:"60px", paddingRight:"40px", backgroundColor:"#4C3B2BF0"}}>
        <div className="background-image" display="inline-block"></div>
      </Grid>
    </Grid>
  );
};
