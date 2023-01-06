import { createContext, useState } from 'react';

let initialLogin = false;
if (localStorage.getItem('accessToken') != null) {
  initialLogin = true;
}
const AuthCtxValue = {
  isLogin: initialLogin,
};

export const AuthCtx = createContext(AuthCtxValue);
export default function AuthCtxProvider({ children }) {
  const [isLogin, setIsLogin] = useState(AuthCtxValue.isLogin);
  return (
    <AuthCtx.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthCtx.Provider>
  );
}
