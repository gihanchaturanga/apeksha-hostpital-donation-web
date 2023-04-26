import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  ToggleButtonGroup,
  ToggleButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NewSelect from "../../common/Select/NewSelect";
import "./DonateComponent.css";

export const DonateComponent = () => {
  const currency_list = [
    { name: "British Pound Sterling", code: "GBP", symbol: "£" },
    { name: "Canadian Dollar", code: "CAD", symbol: "$" },
    { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
    { name: "Euro", code: "EUR", symbol: "€" },
    { name: "Indian Rupee", code: "INR", symbol: "₹" },
    { name: "Japanese Yen", code: "JPY", symbol: "¥" },
    { name: "Kuwaiti Dinar", code: "KWD", symbol: "ك.د" },
    { name: "Pakistani Rupee", code: "PKR", symbol: "₨" },
    { name: "Qatari Rial", code: "QAR", symbol: "ق.ر" },
    { name: "Singapore Dollar", code: "SGD", symbol: "$" },
    { name: "Sri Lankan Rupee", code: "LKR", symbol: "Rs" },
    { name: "Swiss Franc", code: "CHF", symbol: "CHf" },
    { name: "United Arab Emirates Dirham", code: "AED", symbol: "إ.د" },
    { name: "US Dollar", code: "USD", symbol: "$" },
  ];

  const [type, setType] = useState("one-time");
  const [currency, setCurrency] = useState("LKR");
  const [value, setvalue] = useState("5000");

  const handleTypeChange = (event) => {
    setType(event.target.value);
    console.log(event.target.value);
  };

  const handleValueChange = (event) => {
    setvalue(event.target.value);
    console.log(event.target.value);
  };

  const handleCurrencySelect = (event) => {
    console.log(event.target.value);
    setCurrency(event.target.value);
  };

  const handleAmountFieldChange = (event) => {
    console.log(event.target.value);
    setvalue(event.target.value);
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
          sx={{ fontSize: 18, marginTop: 6, marginBottom: 5 }}
          color="text.secondary"
        >
          Donate to Apeksha Cancer Hospital
        </Typography>

        <FormControl>
          <OutlinedInput
            id="outlined-adornment-amount"
            size="samll"
            value={value}
            sx={{ marginBottom: 4, marginX: 1.45, paddingRight: 0 }}
            onChange={handleAmountFieldChange}
            startAdornment={
              <InputAdornment position="start">
                {
                  currency_list.find((currObj) =>
                    currObj.code === currency ? currObj.symbol : null
                  ).symbol
                }
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <TextField
                  value={currency}
                  onChange={handleCurrencySelect}
                  edge="end"
                  defaultValue="LKR"
                  select
                  display="flex"
                  sx={{ width: "92px", border: 0 }}
                >
                  {currency_list.map((currObj) => (
                    <MenuItem value={currObj.code}>
                      {currObj.code} | {currObj.name}
                    </MenuItem>
                  ))}
                </TextField>
              </InputAdornment>
            }
          />
        </FormControl>

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
            rowGap: "10px",
          }}
        >
          <ToggleButton
            value="2000"
            variant="outlined"
            id={value === "2000" ? "selected" : "normal"}
            xs={4}
            sx={{
              paddingX: "10px",
              width: "90px",
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
              width: "90px",
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
              width: "90px",
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
              width: "90px",
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
              width: "90px",
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
              width: "90px",
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
