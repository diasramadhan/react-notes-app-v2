import {
  Box,
  CircularProgress,
  Modal,
  Typography,
} from '@mui/material';

const Loading = () => {
  return (
    <Modal
      open={true}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        <Typography variant="body1">Memuat Data</Typography>
      </Box>
    </Modal>
  );
};

export default Loading;
