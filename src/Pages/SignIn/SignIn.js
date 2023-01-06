import { CssBaseline, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoxStyled } from '../../Components/Box/Boxs';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from './form.SignIn';

const SignIn = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <BoxStyled>
        <LoginForm />
        <Typography variant="h6">
          belum punya akun?{' '}
          <Link to={'/register'}>
            <span style={{ color: '#FF5F00' }}>daftar</span>
          </Link>
        </Typography>
      </BoxStyled>
    </>
  );
};

export default SignIn;
