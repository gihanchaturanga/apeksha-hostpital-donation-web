import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

export default function NewSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const none = props.none || false;
  const value = props.value || age;

  return (
      <>
          <Box marginBottom={1}>
            <FormControl fullWidth error={props.err} size='small'>
                <InputLabel id={props.id}>{props.label}</InputLabel>
                <Select
                labelId={props.id}
                key={props.key}
                label={props.label}
                name={props.name}
                value={value}
                id={props.id}
                onChange={props.handleChange || handleChange}
                native
                variant='outlined'
                defaultValue={props.defaultValue}
                >
                {none ? <option value=""></option> : null}
                  {props.children}
                </Select>
                <FormHelperText>{props.helper}</FormHelperText>
            </FormControl>
          </Box>
      </>
  );
}