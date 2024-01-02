import React, { useEffect, useState } from 'react'
import '../../scss/styles.scss'
import { IoIosMail, IoMdRocket } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";
import { SiNetflix } from "react-icons/si";
import { useLang } from '../../context/LangContext';

const FooterComp = () => {

    const [fullYear, setFullYear] = useState("");
    const { lang } = useLang();

    const getFullYear = () => {
        const date = new Date();
        const fullYear = date.getFullYear();
        setFullYear(fullYear);
    }

    useEffect(() => {
        getFullYear();
    })

    return (
        <div className='personalWebSiteFooterContainer' id='contact'>
            <div className='personalWebSiteFooter'>
                <div className='personalWebSiteFooterContentTop'>
                    <div className='personalWebSiteFooterContentBody'>
                        <h1>{lang === "en" ? "SAY HELLO" : "MERHADA DE"}</h1>
                        <a href='/'><IoIosMail /><p>Mail</p></a>
                        <a href='https://github.com/Fatih-Tanriverdi/Arcanis'><FaMedium /><p>Medium</p></a>
                    </div>
                    <div className='personalWebSiteFooterContentBody'>
                        <h1>{lang === "en" ? "PROJECT LINKS" : "PROJE LİNKLERİ"}</h1>
                        <a href='/'><IoMdRocket /><p>Arcanis</p></a>
                        <a href='https://github.com/Fatih-Tanriverdi/Netflix-Clone'><SiNetflix /><p>Netflix-Clone</p></a>
                    </div>
                </div>
                <div className='personalWebSiteFooterContentFooter'>
                    <p>© Fatih Tanrıverdi {fullYear}</p>
                    <img src='/images/Website_Logo_Gold_Preview.png' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default FooterComp