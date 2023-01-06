import { Unarchive } from '@mui/icons-material';
import { Button } from '@mui/material';

const ButtonUnarchive = () => {
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
      <Unarchive fontSize="large" />
    </Button>
  );
};

export default ButtonUnarchive;
