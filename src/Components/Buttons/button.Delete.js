import { DeleteForever } from '@mui/icons-material';
import { Button } from '@mui/material';

const ButtonDelete = () => {
  return (
    <Button
      sx={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        position: 'absolute',
        bottom: '20px',
        right: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      bgcolor="#FF5F00"
      variant="contained"
    >
      <DeleteForever fontSize="large" />
    </Button>
  );
};

export default ButtonDelete;
