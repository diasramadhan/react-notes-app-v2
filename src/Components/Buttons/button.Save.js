import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';

const ButtonSave = () => {
  return (
    <Button
      sx={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        position: 'absolute',
        bottom: '20px',
        right: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      bgcolor="#FF5F00"
      variant="contained"
    >
      <CheckIcon fontSize="large" />
    </Button>
  );
};

export default ButtonSave;
