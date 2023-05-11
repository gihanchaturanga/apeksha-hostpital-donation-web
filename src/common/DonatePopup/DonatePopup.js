import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { DonateComponent } from "../DonateComponent/DonateComponent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "./DonatePopup.css";
import img from "../../resources/images/card1.jpg";

export const DonatePopup = (props) => {
  return (
    <Dialog
      maxWidth="md"
      open={props.open}
      onClose={props.onClose}
      className="donate-pop-dialog"
      sx={{ backgroundColor: "transparent" }}
    >
      <Button
        onClick={props.onClose}
        aria-label="close"
        sx={{ width: "30px", height: "30px", marginTop: 1, marginLeft: 1 }}
        color="inherit"
        id="donate-pop-close-btn"
      >
        <CloseIcon />
      </Button>
      <DialogContent>
        <Grid
          display="flex"
          className="donate-pop-container"
          sx={{
            justifyContent: "center",
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Grid margin={1}>
            <Card sx={{ maxWidth: 400, minWidth: 345 }} className="donate-pop-card">
              <CardMedia component="img" height="230" image={img} alt="image" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontFamily="ItimBold"
                >
                  Volunteer Sri Lanka
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontFamily="ItimBold"
                >
                  Help to uplift the life of one among us!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Volunteer Sri Lanka, we believe that everyone deserves the
                  right to food, water, healthcare and education. Through your
                  support & our amazing partners, we are able to provide support
                  to those who need it locally & globally.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid margin={1}>
            <DonateComponent />
          </Grid>
        </Grid>
      </DialogContent>
      {/* <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
    </Dialog>
  );
};
