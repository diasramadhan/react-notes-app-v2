import ArchiveIcon from '@mui/icons-material/Archive';
import { Button } from '@mui/material';

const ButtonArchive = () => {
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
      <ArchiveIcon fontSize="large" />
    </Button>
  );
};

export default ButtonArchive;
