import { CssBaseline, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoxStyled } from '../../Components/Box/Boxs';
import Navbar from '../../Components/Navbar/Navbar';
import FormSignUp from './form.SignUp';

const SignUp = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <BoxStyled>
        <FormSignUp />
        <Typography variant="h6">
          sudah punya akun?{' '}
          <Link to={'/login'}>
            <span style={{ color: '#FF5F00' }}>Login</span>
          </Link>
        </Typography>
      </BoxStyled>
    </>
  );
};

export default SignUp;
