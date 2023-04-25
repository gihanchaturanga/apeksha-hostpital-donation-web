import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import "./DonateComponent.css";

export const DonateComponent = () => {
  return (
    <Card sx={{ maxWidth: 345 }} elevation="5">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#4C3B2BF0",
            color: "#F6EDE4",
          }}
          id="donate-comp-btn"
        >
          CONTRIBUTE
        </Button>
      </CardActions>
    </Card>
  );
};
