import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./DonateComponent.css";

export const DonateComponent = () => {
  const [type, setType] = useState("one-time");
  const [value, setvalue] = useState("5000");

  const handleTypeChange = (event) => {
    setType(event.target.value);
    console.log(event.target.value);
  };

  const handleValueChange = (event) => {
    setvalue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345 }} elevation="5">
      <CardContent>
        {/* Button group for donation type */}
        <ToggleButtonGroup
          value={type}
          exclusive
          onChange={handleTypeChange}
          aria-label="Platform"
          className="toggle"
          size="small"
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ToggleButton
            value="one-time"
            variant="outlined"
            id={type === "one-time" ? "selected" : "normal"}
            sx={{ paddingX: "25px", boxSizing: "border-box" }}
          >
            One Time
          </ToggleButton>
          <ToggleButton
            value="monthly"
            variant="outlined"
            id={type === "monthly" ? "selected" : "normal"}
            sx={{ paddingX: "10px", boxSizing: "border-box" }}
          >
            <FavoriteIcon
              color="error"
              sx={{ paddingX: 0.45, marginRight: 0.5 }}
              value="monthly"
              disabled
            />
            Monthly
          </ToggleButton>
        </ToggleButtonGroup>

        <Typography
          sx={{ fontSize: 18, marginTop: 6, marginBottom:5 }}
          color="text.secondary"
        >
          Donate to Apeksha Cancer Hospital
        </Typography>

        {/* Button Group for donate amount */}
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={handleValueChange}
          aria-label="Platform"
          className="toggle"
          size="small"
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
            rowGap:'10px'
          }}
        >
          <ToggleButton
            value="2000"
            variant="outlined"
            id={value === "2000" ? "selected" : "normal"}
            xs={4}
            sx={{
              paddingX: "10px",
              width:"90px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          >
            Rs 2,000
          </ToggleButton>
          <ToggleButton
            item
            value="5000"
            variant="outlined"
            id={value === "5000" ? "selected" : "normal"}
            xs={4}
            sx={{
              paddingX: "10px",
              width:"90px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          >
            Rs 5,000
          </ToggleButton>
          <ToggleButton
            item
            value="8000"
            variant="outlined"
            id={value === "8000" ? "selected" : "normal"}
            xs={4}
            sx={{
              paddingX: "10px",
              width:"90px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          >
            Rs 8,000
          </ToggleButton>
          <ToggleButton
            item
            value="12000"
            variant="outlined"
            id={value === "12000" ? "selected" : "normal"}
            xs={4}
            sx={{
              paddingX: "10px",
              width:"90px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          >
            Rs 12k
          </ToggleButton>
          <ToggleButton
            item
            value="15000"
            variant="outlined"
            id={value === "15000" ? "selected" : "normal"}
            xs={4}
            sx={{
              paddingX: "10px",
              width:"90px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          >
            Rs 15k
          </ToggleButton>
          <ToggleButton
            item
            value="20000"
            variant="outlined"
            id={value === "20000" ? "selected" : "normal"}
            sx={{
              paddingX: "10px",
              width:"90px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          >
            Rs 20k
          </ToggleButton>
        </ToggleButtonGroup>

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
