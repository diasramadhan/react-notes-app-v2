import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeCtx } from './Context/ThemeContext';
import { AuthCtx } from './Context/AuthContext';
import AddNote from './Pages/Add/AddNote';
import Archive from './Pages/Archive/Archive';
import Detail from './Pages/Detail/Detail';

function App() {
  const [theme, setTheme] = useState('dark');
  const { dark, setDark } = useContext(ThemeCtx);
  const { isLogin } = useContext(AuthCtx);

  const DarkTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: '#FF5F00',
      },
    },
  });
  const RequireAuth = ({ children }) => {
    return <>{isLogin ? children : <Navigate to={'/login'} />}</>;
  };
  useEffect(() => {
    let isChange = false;
    if (isChange === false) {
      if (dark) {
        setTheme('dark');
      }
      if (dark === false) {
        setTheme('light');
      }
    }
    return () => {
      isChange = true;
    };
  }, [dark]);

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={DarkTheme}>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/add"
              element={
                <RequireAuth>
                  <AddNote />
                </RequireAuth>
              }
            />
            <Route
              path="/archive"
              element={
                <RequireAuth>
                  <Archive />
                </RequireAuth>
              }
            />
            <Route
              path="/note/:id"
              element={
                <RequireAuth>
                  <Detail />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
