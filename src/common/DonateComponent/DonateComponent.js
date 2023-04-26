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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NewSelect from "../../common/Select/NewSelect";
import "./DonateComponent.css";

export const DonateComponent = () => {
  const currency_list = [
    { code: "AFA", symbol: "؋" },
    { code: "ALL", symbol: "Lek" },
    { code: "DZD", symbol: "دج" },
    { code: "AOA", symbol: "Kz" },
    { code: "ARS", symbol: "$" },
    { code: "AMD", symbol: "֏" },
    { code: "AWG", symbol: "ƒ" },
    { code: "AUD", symbol: "$" },
    { code: "AZN", symbol: "m" },
    { code: "BSD", symbol: "B$" },
    { code: "BHD", symbol: ".د.ب" },
    { code: "BDT", symbol: "৳" },
    { code: "BBD", symbol: "Bds$" },
    { code: "BYR", symbol: "Br" },
    { code: "BEF", symbol: "fr" },
    { code: "BZD", symbol: "$" },
    { code: "BMD", symbol: "$" },
    { code: "BTN", symbol: "Nu." },
    { code: "BTC", symbol: "฿" },
    { code: "BOB", symbol: "Bs." },
    { code: "BAM", symbol: "KM" },
    { code: "BWP", symbol: "P" },
    { code: "BRL", symbol: "R$" },
    { code: "GBP", symbol: "£" },
    { code: "BND", symbol: "B$" },
    { code: "BGN", symbol: "Лв." },
    { code: "BIF", symbol: "FBu" },
    { code: "KHR", symbol: "KHR" },
    { code: "CAD", symbol: "$" },
    { code: "CVE", symbol: "$" },
    { code: "KYD", symbol: "$" },
    { code: "XOF", symbol: "CFA" },
    { code: "XAF", symbol: "FCFA" },
    { code: "XPF", symbol: "₣" },
    { code: "CLP", symbol: "$" },
    { code: "CLF", symbol: "CLF" },
    { code: "CNY", symbol: "¥" },
    { code: "COP", symbol: "$" },
    { code: "KMF", symbol: "CF" },
    { code: "CDF", symbol: "FC" },
    { code: "CRC", symbol: "₡" },
    { code: "HRK", symbol: "kn" },
    { code: "CUC", symbol: "$, CUC" },
    { code: "CZK", symbol: "Kč" },
    { code: "DKK", symbol: "Kr." },
    { code: "DJF", symbol: "Fdj" },
    { code: "DOP", symbol: "$" },
    { code: "XCD", symbol: "$" },
    { code: "EGP", symbol: "ج.م" },
    { code: "ERN", symbol: "Nfk" },
    { code: "EEK", symbol: "kr" },
    { code: "ETB", symbol: "Nkf" },
    { code: "EUR", symbol: "€" },
    { code: "FKP", symbol: "£" },
    { code: "FJD", symbol: "FJ$" },
    { code: "GMD", symbol: "D" },
    { code: "GEL", symbol: "ლ" },
    { code: "DEM", symbol: "DM" },
    { code: "GHS", symbol: "GH₵" },
    { code: "GIP", symbol: "£" },
    { code: "GRD", symbol: "₯, Δρχ, Δρ" },
    { code: "GTQ", symbol: "Q" },
    { code: "GNF", symbol: "FG" },
    { code: "GYD", symbol: "$" },
    { code: "HTG", symbol: "G" },
    { code: "HNL", symbol: "L" },
    { code: "HKD", symbol: "$" },
    { code: "HUF", symbol: "Ft" },
    { code: "ISK", symbol: "kr" },
    { code: "INR", symbol: "₹" },
    { code: "IDR", symbol: "Rp" },
    { code: "IRR", symbol: "﷼" },
    { code: "IQD", symbol: "د.ع" },
    { code: "ILS", symbol: "₪" },
    { code: "ITL", symbol: "L,£" },
    { code: "JMD", symbol: "J$" },
    { code: "JPY", symbol: "¥" },
    { code: "JOD", symbol: "ا.د" },
    { code: "KZT", symbol: "лв" },
    { code: "KES", symbol: "KSh" },
    { code: "KWD", symbol: "ك.د" },
    { code: "KGS", symbol: "лв" },
    { code: "LAK", symbol: "₭" },
    { code: "LVL", symbol: "Ls" },
    { code: "LBP", symbol: "£" },
    { code: "LSL", symbol: "L" },
    { code: "LRD", symbol: "$" },
    { code: "LYD", symbol: "د.ل" },
    { code: "LTC", symbol: "Ł" },
    { code: "LTL", symbol: "Lt" },
    { code: "MOP", symbol: "$" },
    { code: "MKD", symbol: "ден" },
    { code: "MGA", symbol: "Ar" },
    { code: "MWK", symbol: "MK" },
    { code: "MYR", symbol: "RM" },
    { code: "MVR", symbol: "Rf" },
    { code: "MRO", symbol: "MRU" },
    { code: "MUR", symbol: "₨" },
    { code: "MXN", symbol: "$" },
    { code: "MDL", symbol: "L" },
    { code: "MNT", symbol: "₮" },
    { code: "MAD", symbol: "MAD" },
    { code: "MZM", symbol: "MT" },
    { code: "MMK", symbol: "K" },
    { code: "NAD", symbol: "$" },
    { code: "NPR", symbol: "₨" },
    { code: "ANG", symbol: "ƒ" },
    { code: "TWD", symbol: "$" },
    { code: "NZD", symbol: "$" },
    { code: "NIO", symbol: "C$" },
    { code: "NGN", symbol: "₦" },
    { code: "KPW", symbol: "₩" },
    { code: "NOK", symbol: "kr" },
    { code: "OMR", symbol: ".ع.ر" },
    { code: "PKR", symbol: "₨" },
    { code: "PAB", symbol: "B/." },
    { code: "PGK", symbol: "K" },
    { code: "PYG", symbol: "₲" },
    { code: "PEN", symbol: "S/." },
    { code: "PHP", symbol: "₱" },
    { code: "PLN", symbol: "zł" },
    { code: "QAR", symbol: "ق.ر" },
    { code: "RON", symbol: "lei" },
    { code: "RUB", symbol: "₽" },
    { code: "RWF", symbol: "FRw" },
    { code: "SVC", symbol: "₡" },
    { code: "WST", symbol: "SAT" },
    { code: "STD", symbol: "Db" },
    { code: "SAR", symbol: "﷼" },
    { code: "RSD", symbol: "din" },
    { code: "SCR", symbol: "SRe" },
    { code: "SLL", symbol: "Le" },
    { code: "SGD", symbol: "$" },
    { code: "SKK", symbol: "Sk" },
    { code: "SBD", symbol: "Si$" },
    { code: "SOS", symbol: "Sh.so." },
    { code: "ZAR", symbol: "R" },
    { code: "KRW", symbol: "₩" },
    { code: "SSP", symbol: "£" },
    { code: "XDR", symbol: "SDR" },
    { code: "LKR", symbol: "Rs" },
    { code: "SHP", symbol: "£" },
    { code: "SDG", symbol: ".س.ج" },
    { code: "SRD", symbol: "$" },
    { code: "SZL", symbol: "E" },
    { code: "SEK", symbol: "kr" },
    { code: "CHF", symbol: "CHf" },
    { code: "SYP", symbol: "LS" },
    { code: "TJS", symbol: "SM" },
    { code: "TZS", symbol: "TSh" },
    { code: "THB", symbol: "฿" },
    { code: "TOP", symbol: "$" },
    { code: "TTD", symbol: "$" },
    { code: "TND", symbol: "ت.د" },
    { code: "TRY", symbol: "₺" },
    { code: "TMT", symbol: "T" },
    { code: "UGX", symbol: "USh" },
    { code: "UAH", symbol: "₴" },
    { code: "AED", symbol: "إ.د" },
    { code: "UYU", symbol: "$" },
    { code: "USD", symbol: "$" },
    { code: "UZS", symbol: "лв" },
    { code: "VUV", symbol: "VT" },
    { code: "VEF", symbol: "Bs" },
    { code: "VND", symbol: "₫" },
    { code: "YER", symbol: "﷼" },
    { code: "ZMK", symbol: "ZK" },
    { code: "ZWL", symbol: "$" },
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
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                {
                  currency_list.find((currObj) =>
                    currObj.code === currency ? currObj.symbol : null
                  ).symbol
                }
              </InputAdornment>
            }
            label="Amount"
            endAdornment={
              <InputAdornment position="end">
                <Select
                  aria-label="currency"
                  value={currency}
                  onChange={handleCurrencySelect}
                  edge="end"
                  defaultValue="LKR"
                  native
                >
                  {currency_list.map((currObj) => (
                    <option>{currObj.code}</option>
                  ))}
                </Select>
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
