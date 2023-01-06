import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import Switch from '@mui/material/Switch';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeCtx } from '../../Context/ThemeContext';
import { Logout } from '@mui/icons-material';
import { AuthCtx } from '../../Context/AuthContext';
import { TranslateCtx } from '../../Context/TranslateContext';

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeCtx);
  const [checked, setChecked] = useState(dark);
  const { setIsLogin } = useContext(AuthCtx);
  const { lang, setLang } = useContext(TranslateCtx);
  const navigate = useNavigate();
  const [langActive, setLangActive] = useState({
    head: '',
    archive: '',
  });

  const userdata = JSON.parse(localStorage.getItem('userdata'));
  const text = {
    english: {
      head: 'Active Note',
      archive: 'Archived',
    },
    bahasa: {
      head: 'Catatan Aktif',
      archive: 'Terarsip',
    },
  };
  useEffect(() => {
    lang === 'id'
      ? setLangActive(text.bahasa)
      : setLangActive(text.english);
  }, [lang]);
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userdata');
    setIsLogin((prev) => (prev = false));
    navigate('/login');
  };
  const handleChangeLang = () => {
    setLang(lang === 'id' ? 'en' : 'id');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to={'/'}>{langActive.head}</Link>
          </Typography>
          <Link to={'/archive'}>
            <Typography variant="h6">{langActive.archive}</Typography>
          </Link>
          <Button
            sx={{
              color: '#fff',
            }}
            onClick={() => handleChangeLang()}
          >
            <GTranslateIcon />
          </Button>
          <Switch
            checked={dark}
            onChange={(e) => setDark(dark === true ? false : true)}
            onClick={(e) => setChecked(!dark)}
            inputProps={{ 'aria-label': 'controlled' }}
            color="primary"
          />
          {userdata === null ? null : (
            <Button variant="inherit" onClick={() => handleLogOut()}>
              <Typography variant="h6">{userdata.name}</Typography>
              <Logout fontSize="medium" />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
