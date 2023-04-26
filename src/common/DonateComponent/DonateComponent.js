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
  OutlinedInput,
  FormControl,
  TextField,
  MenuItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./DonateComponent.css";

export const DonateComponent = () => {
  const currency_list = [
    {
      name: "British Pound Sterling",
      code: "GBP",
      symbol: "£",
      vals: [
        { key: "£ 5", value: "5" },
        { key: "£ 15", value: "15" },
        { key: "£ 25", value: "25" },
        { key: "£ 30", value: "30" },
        { key: "£ 50", value: "50" },
        { key: "£ 100", value: "100" },
      ],
    },
    {
      name: "Canadian Dollar",
      code: "CAD",
      symbol: "$",
      vals: [
        { key: "$ 25", value: "25" },
        { key: "$ 50", value: "50" },
        { key: "$ 100", value: "100" },
        { key: "$ 250", value: "250" },
        { key: "$ 500", value: "500" },
        { key: "$ 1,500", value: "1500" },
      ],
    },
    {
      name: "Chinese Yuan",
      code: "CNY",
      symbol: "¥",
      vals: [
        { key: "¥ 50", value: "50" },
        { key: "¥ 110", value: "110" },
        { key: "¥ 200", value: "200" },
        { key: "¥ 500", value: "500" },
        { key: "¥ 1,500", value: "1500" },
        { key: "¥ 2,200", value: "2200" },
      ],
    },
    {
      name: "Euro",
      code: "EUR",
      symbol: "€",
      vals: [
        { key: "€ 5", value: "5" },
        { key: "€ 25", value: "25" },
        { key: "€ 50", value: "50" },
        { key: "€ 100", value: "100" },
        { key: "€ 250", value: "250" },
        { key: "€ 500", value: "500" },
      ],
    },
    {
      name: "Indian Rupee",
      code: "INR",
      symbol: "₹",
      vals: [
        { key: "₹ 500", value: "500" },
        { key: "₹ 1,500", value: "1500" },
        { key: "₹ 4k", value: "4000" },
        { key: "₹ 7.5k", value: "7500" },
        { key: "₹ 12.5k", value: "12500" },
        { key: "₹ 25k", value: "25000" },
      ],
    },
    {
      name: "Japanese Yen",
      code: "JPY",
      symbol: "¥",
      vals: [
        { key: "¥ 1,500", value: "1500" },
        { key: "¥ 2.5k", value: "2500" },
        { key: "¥ 5k", value: "5000" },
        { key: "¥ 10k", value: "10000" },
        { key: "¥ 25k", value: "25000" },
        { key: "¥ 50k", value: "50000" },
      ],
    },
    {
      name: "Kuwaiti Dinar",
      code: "KWD",
      symbol: "ك.د",
      vals: [
        { key: "5", value: "5" },
        { key: "10", value: "10" },
        { key: "20", value: "20" },
        { key: "30", value: "30" },
        { key: "50", value: "50" },
        { key: "100", value: "100" },
      ],
    },
    {
      name: "Pakistani Rupee",
      code: "PKR",
      symbol: "₨",
      vals: [
        { key: "Rs 2,000", value: "2000" },
        { key: "Rs 5,000", value: "5000" },
        { key: "Rs 15k", value: "15000" },
        { key: "Rs 30k", value: "30000" },
        { key: "Rs 50k", value: "50000" },
        { key: "Rs 100k", value: "100000" },
      ],
    },
    {
      name: "Qatari Rial",
      code: "QAR",
      symbol: "ق.ر",
      vals: [
        { key: "25", value: "25" },
        { key: "50", value: "50" },
        { key: "100", value: "100" },
        { key: "250", value: "250" },
        { key: "500", value: "500" },
        { key: "1,500", value: "1500" },
      ],
    },
    {
      name: "Singapore Dollar",
      code: "SGD",
      symbol: "$",
      vals: [
        { key: "$ 25", value: "25" },
        { key: "$ 50", value: "50" },
        { key: "$ 100", value: "100" },
        { key: "$ 250", value: "250" },
        { key: "$ 500", value: "500" },
        { key: "$ 1,500", value: "1500" },
      ],
    },
    {
      name: "Sri Lankan Rupee",
      code: "LKR",
      symbol: "Rs",
      vals: [
        { key: "Rs 2,000", value: "2000" },
        { key: "Rs 5,000", value: "5000" },
        { key: "Rs 8,000", value: "8000" },
        { key: "Rs 15k", value: "15000" },
        { key: "Rs 30k", value: "30000" },
        { key: "Rs 50k", value: "50000" },
      ],
    },
    {
      name: "Swiss Franc",
      code: "CHF",
      symbol: "CHf",
      vals: [
        { key: "5", value: "5" },
        { key: "15", value: "15" },
        { key: "25", value: "25" },
        { key: "100", value: "100" },
        { key: "200", value: "200" },
        { key: "300", value: "300" },
      ],
    },
    {
      name: "United Arab Emirates Dirham",
      code: "AED",
      symbol: "إ.د",
      vals: [
        { key: "20", value: "20" },
        { key: "50", value: "50" },
        { key: "80", value: "80" },
        { key: "150", value: "150" },
        { key: "300", value: "300" },
        { key: "500", value: "500" },
      ],
    },
    {
      name: "US Dollar",
      code: "USD",
      symbol: "$",
      vals: [
        { key: "$ 25", value: "25" },
        { key: "$ 50", value: "50" },
        { key: "$ 100", value: "100" },
        { key: "$ 250", value: "250" },
        { key: "$ 500", value: "500" },
        { key: "$ 1,500", value: "1500" },
      ],
    },
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
          {currency_list
            .find((currObj) => (currObj.code === currency ? currObj : null))
            .vals.map((obj) => (
              <ToggleButton
                item
                value={obj.value}
                variant="outlined"
                id={value === obj.value ? "selected" : "normal"}
                sx={{
                  paddingX: "10px",
                  width: "90px",
                  boxSizing: "border-box",
                  fontSize: "15px",
                }}
              >
                {obj.key}
              </ToggleButton>
            ))}
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
