import { styled, Box } from '@mui/material';

export const BoxStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: 700,
});

export const BoxForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: 500,
  height: 400,
  bgcolor: 'background.default',
  color: 'text.primary',
  p: 3,
  borderRadius: 3,
  textAlign: 'center',
});
export const BoxDetail = styled(Box)({
  display: 'flex',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '200px',
});
