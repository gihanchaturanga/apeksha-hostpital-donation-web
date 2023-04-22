
/*
* ## props used in TextFields component
* - id
* - value
* - label
* - placeholder
* - name
* - onChange
* - err
* - type
*/

import React from "react";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, FormControl } from "@mui/material";

const NewTextField = (props) => {

    const fieldType = props.type || 'text';

  return (
    <>
      <Box width={350}>
        <FormControl fullWidth>
            <TextField
                id={props.id}
                key={props.id}
                value={props.value}
                label={props.label}
                fullWidth
                size="small"
                placeholder={props.placeholder}
                name={props.name}
                variant="outlined"
                onChange={props.onChange}
                error={props.err}
                type={fieldType}
                required={props.required}
                disabled={props.disabled}
                sx={props.sx}
                
            />
            {props.helper && <FormHelperText error={props.err}>{props.helper}</FormHelperText>}
        </FormControl>
      </Box>
    </>
  );
};

export default NewTextField;
