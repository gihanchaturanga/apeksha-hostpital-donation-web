import React from "react";
import "./PageNotFound.css";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <Grid
      className="pnf-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <div className="pnf-back-img">
          <h1 className="pnf-h1">Oops!</h1>
        </div>
        <h3 className="pnf-h3">404 - PAGE NOT FOUND</h3>
        <p className="pnf-p">
          The page you're looking for does not exist or has been moved.
        </p>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4C3B2BF0" }}
          id="back-to-home"
          onClick={() => {
            nav("/");
          }}
        >
          Return to Homepage
        </Button>
      </div>
    </Grid>
  );
};
