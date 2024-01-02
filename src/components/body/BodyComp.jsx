import React from 'react'
import '../../scss/styles.scss'
import { FiMoreHorizontal } from "react-icons/fi";
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
                        <a href='#about' className='aboutButton personalBodyAboutButton'>{lang === "en" ? "More" : "Devamı"}<i><FiMoreHorizontal /></i></a>
                    </div>
                    <div className='personalWebSiteBodyContentRight'>
                        <img src='/images/Fatih_Tan_Emoji.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyComp