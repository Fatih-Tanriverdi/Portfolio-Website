import React from 'react'
import '../../scss/styles.scss'
import { IoDownloadOutline } from "react-icons/io5";
import { useLang } from '../../context/LangContext';

const BodyComp = () => {

    const { lang } = useLang();

    return (
        <div className='personalWebSiteBodyContainer' id='home'>
            <div className='personalWebSiteBody'>
                <div className='personalWebSiteBodyContent'>
                    <div className='personalWebSiteBodyContentLeft'>
                        <b>
                            {lang === 'en' ? 'Hi,' : 'Merhaba,'}
                            <br />
                            {lang === 'en' ? "My name is Fatih." : 'Benim adım Fatih'}
                            <br />
                            {lang === 'en' ? "I'm a Frontend Developer." : "Ben Frontend Developer'ım"}
                        </b>
                        <a href='/images/FatihTanrıverdiCV.pdf' download="Fatih_Tanrıverdi_CV.pdf" className='aboutButton personalBodyAboutButton'><b>{lang === "en" ? "DOWNLOAD CV" : "CV'Yİ İNDİR"}</b><i><IoDownloadOutline /></i></a>
                    </div>
                    <div className='personalWebSiteBodyContentRight'>
                        <img src='/images/avatar_hello.png' alt='Avatar_Hello'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyComp