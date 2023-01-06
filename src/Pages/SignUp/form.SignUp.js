import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField, Typography } from '@mui/material';
import { register } from '../../Services';
import { BoxForm, BoxStyled } from '../../Components/Box/Boxs';

const FormSignUp = () => {
  const [dataInput, setDataInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleRegisterUser = async () => {
    const results = await register(dataInput).then((res) => {
      return res;
    });
    if (results.error === false) {
      navigate('/login');
    }
  };
  const getDataInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'name') {
      return setDataInput((prev) => ({ ...prev, name: value }));
    }
    if (name === 'email') {
      return setDataInput((prev) => ({ ...prev, email: value }));
    }
    if (name === 'password') {
      return setDataInput((prev) => ({ ...prev, password: value }));
    }
  };
  return (
    <BoxForm>
      <BoxStyled p={2}>
        <Typography variant="h5" color={'primary'}>
          Register
        </Typography>
        <TextField
          fullWidth
          id="name"
          label="name"
          type="text"
          variant="outlined"
          name="name"
          onChange={(e) => getDataInput(e)}
        />

        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          onChange={(e) => getDataInput(e)}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          onChange={(e) => getDataInput(e)}
        />
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={() => handleRegisterUser()}
        >
          Sign Up
        </Button>
      </BoxStyled>
    </BoxForm>
  );
};

export default FormSignUp;
