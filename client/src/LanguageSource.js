import React, { createContext, useContext, useState } from "react";
import enTranslation from "./translations/en.json";
import ptTranslation from "./translations/pt.json";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const useTranslation = () => {
  const { translations, currentLanguage } = useLanguage();

  const t = (key) => {
    return translations[currentLanguage][key] || "key not found";
  };
  return { t };
};

export const LanguageSource = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const translations = {
    en: enTranslation,
    pt: ptTranslation,
  };
  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
