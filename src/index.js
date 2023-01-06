import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthCtxProvider from './Context/AuthContext';
import ThemeCtxProvider from './Context/ThemeContext';
import TranslateCtxProvider from './Context/TranslateContext';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthCtxProvider>
      <ThemeCtxProvider>
        <TranslateCtxProvider>
          <App />
        </TranslateCtxProvider>
      </ThemeCtxProvider>
    </AuthCtxProvider>
  </React.StrictMode>
);
