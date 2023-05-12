import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./FloatingActionBtn.css";
import { DonatePopup } from "../DonatePopup/DonatePopup";

export const FloatingActionBtn = () => {
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="global-action-btn-container">
      <Button
        variant="extended"
        id="global-action-btn"
        sx={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderTopLeftRadius: "10px",
          backgroundColor: "#ec644b",
          color: "white",
          height: "60px",
          fontWeight: "bolder",
        }}
        onClick={handleChange}
      >
        <FavoriteIcon sx={{ mr: 1 }} className="floating-btn-icon"/>
        Donate
      </Button>

      <Fab
        aria-label="like"
        id="global-action-btn-mobile"
        sx={{ color: "white", backgroundColor: "#ec644b" }}
        onClick={handleChange}
      >
        <FavoriteIcon  className="floating-btn-icon"/>
      </Fab>

      <DonatePopup open={open} onClose={handleClose} />
    </Box>
  );
};
