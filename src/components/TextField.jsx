import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function TextField() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return '';
    }

    return '';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ borderRadius: '30px' }}>
      <FormControl fullWidth sx={{ width: '964px', height: '85px' }} style={{ backgroundColor: "#FFFFFF"}}>
        <OutlinedInput placeholder="Please enter text" />
        <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                      border: "30px"
                  }
                  }
              }}
              label="outlined"
        />
      </FormControl>
    </Box>
  );
}