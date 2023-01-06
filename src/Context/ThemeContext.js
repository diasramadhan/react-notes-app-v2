import { createContext, useEffect, useState } from 'react';

let initialMode = false;
if (localStorage.getItem('dark') != null) {
  if (localStorage.getItem('dark') === 'true') {
    initialMode = true;
  }
  if (localStorage.getItem('dark') === 'false') {
    initialMode = false;
  }
}
const ThemeCtxValue = {
  dark: initialMode,
};

export const ThemeCtx = createContext(ThemeCtxValue);
export default function ThemeCtxProvider({ children }) {
  const [dark, setDark] = useState(ThemeCtxValue.dark);

  useEffect(() => {
    let isChange = false;

    if (isChange === false) {
      localStorage.setItem('dark', dark);
    }

    return () => {
      isChange = true;
    };
  }, [dark]);
  return (
    <ThemeCtx.Provider value={{ dark, setDark }}>
      {children}
    </ThemeCtx.Provider>
  );
}
