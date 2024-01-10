import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'en' ? 'tr' : 'en'));
    };

    const contextValue = { lang, toggleLang };

    return <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>;
};

const useLang = () => {
    return useContext(LangContext);
};

export { useLang, LangProvider };