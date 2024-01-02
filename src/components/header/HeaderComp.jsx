import React from 'react'
import '../../scss/styles.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLang } from '../../context/LangContext';

const HeaderComp = () => {

    const { toggleLang, lang } = useLang();

    return (
        <div className='personalWebSiteContainer'>
            <div className='personalWebSiteHeader'>
                <div className='personalWebSiteHeaderContent'>
                    <div className='personalWebSiteContentLogo'>
                        <img src='/images/Website_Logo_Transparent.png' alt='Logo' />
                    </div>
                    <div className='personalWebSiteContentLinks'>
                        <a className='home' href='#home'>{lang === "en" ? "Home" : "Anasayfa"}</a>
                        <a href='#projects'>{lang === "en" ? "Projects" : "Projeler"}</a>
                        <a href='#about'>{lang === "en" ? "About" : "Hakkımda"}</a>
                        <a href='#contact'>{lang === "en" ? "Contact" : "İletişim"}</a>
                    </div>
                    <div className='personalWebSiteContentSocial'>
                        <a href='https://github.com/Fatih-Tanriverdi' target='blank'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/tanriverdifatih/' target='blank'><FaLinkedin /></a>
                        <div className='personalWebSiteLanguageButtonContainer'>
                            <button className={`personalWebSiteLanguageButtonEn ${lang === "en" ? "active" : ""}`} onClick={toggleLang}>EN</button>
                            <button className={`personalWebSiteLanguageButtonTr ${lang === "en" ? "" : "active"}`} onClick={toggleLang}>TR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComp