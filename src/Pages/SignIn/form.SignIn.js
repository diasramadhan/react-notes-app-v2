import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { getUserLogged, login, putAccessToken } from '../../Services';
import { AuthCtx } from '../../Context/AuthContext';
import { BoxForm } from '../../Components/Box/Boxs';

function LoginForm() {
  const [dataInput, setDataInput] = useState({
    email: '',
    password: '',
  });
  const { isLogin, setIsLogin } = useContext(AuthCtx);
  const navigate = useNavigate();

  const handleLoginUser = async () => {
    const userdata = await login(dataInput).then((res) => {
      return res;
    });

    if (userdata.error === false) {
      putAccessToken(userdata.data.accessToken);
      setIsLogin((prev) => (prev = true));

      getUserDataLoged();
      navigate('/');
    }
  };
  const getUserDataLoged = async () => {
    await getUserLogged()
      .then((res) => {
        return localStorage.setItem(
          'userdata',
          JSON.stringify(res.data)
        );
      })
      .catch((err) => {
        return null;
      });
  };
  const getDataInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'email') {
      return setDataInput((prev) => ({ ...prev, email: value }));
    }
    if (name === 'password') {
      return setDataInput((prev) => ({ ...prev, password: value }));
    }
  };
  return (
    <BoxForm>
      <Typography variant="h5">Login</Typography>
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
        sx={{ height: 50 }}
        variant="contained"
        size="large"
        onClick={() => handleLoginUser()}
      >
        Login
      </Button>
    </BoxForm>
  );
}

export default LoginForm;
