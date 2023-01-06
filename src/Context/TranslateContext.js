import { createContext, useEffect, useState } from 'react';
const local = localStorage.getItem('language');

let initialLang = 'id';
if (local != null) {
  initialLang = local;
}
const TranslateCtxValue = {
  lang: initialLang,
};

export const TranslateCtx = createContext(TranslateCtxValue);

export default function TranslateCtxProvider({ children }) {
  const [lang, setLang] = useState(TranslateCtxValue.lang);
  useEffect(() => {
    let isChange = false;
    if (isChange === false) {
      localStorage.setItem('language', lang);
    }
    return () => {
      isChange = true;
    };
  }, [lang]);
  return (
    <TranslateCtx.Provider value={{ lang, setLang }}>
      {children}
    </TranslateCtx.Provider>
  );
}
