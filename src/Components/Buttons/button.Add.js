import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ButtonAdd = () => {
  return (
    <Link to={'/add'}>
      <Button
        sx={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          position: 'fixed',
          bottom: '20px',
          right: '160px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        bgcolor="#FF5F00"
        variant="contained"
      >
        <AddIcon fontSize="large" />
      </Button>
    </Link>
  );
};

export default ButtonAdd;
