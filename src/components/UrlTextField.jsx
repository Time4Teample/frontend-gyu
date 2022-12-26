import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function MyFormHelperText() {
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
    <Box component="form" noValidate autoComplete="off" sx={{ width: '964px', height: '100px'}}>
      <FormControl fullWidth sx={{ width: '964px', height: '55px' }} style={{ backgroundColor: "#FFFFFF" , borderColor: "#FFFFFF"}}>
        <OutlinedInput />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
