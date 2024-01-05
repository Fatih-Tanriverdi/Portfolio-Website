import React from 'react'
import { useLang } from '../../context/LangContext';

const ContactComp = () => {

    const { lang } = useLang();

    return (
        <div className='personalWebSiteContactContainer' id='contact'>
            <div className='personalWenSiteContactBody'>
                <div className='personalWebSiteContactContent'>
                    <div className='personalWebSiteContactContentRight'>
                        <img src='/images/Fatih_Tan_Emoji.png' alt='' />
                    </div>
                    <div className='personalWebSiteContactContentLeft'>
                        <h1>
                            {lang === "en"
                                ?
                                "Contact Me"
                                :
                                "Benimle İrtibata Geçin"
                            }
                        </h1>
                        <div className='personalWebSiteContactContentInputGroup'>
                            <div className='personalWebSiteContactContentInputGroupTop'>
                                <div className='personalWebSiteContactNameInput'>
                                    <input type='text' placeholder={lang === "en"
                                        ?
                                        "Your Name"
                                        :
                                        "İsminiz"
                                    }
                                    />
                                </div>
                                <div className='personalWebSiteContactEmail'>
                                    <input type='text' placeholder={lang === "en"
                                        ?
                                        "Your E-mail"
                                        :
                                        "E-mail Adresiniz"
                                    } />
                                </div>
                            </div>
                            <div className='personalWebSiteContactSubject'>
                                <input type='text' placeholder={lang === "en"
                                    ?
                                    "Your Subject"
                                    :
                                    "Konu"
                                } />
                            </div>
                            <div className='personalWebSiteContactMessage'>
                                <textarea placeholder={lang === "en"
                                    ?
                                    "Your Message"
                                    :
                                    "Mesajınız"
                                } />
                            </div>
                        </div>
                        <div className='personalWebSiteContactContentButton'>
                            <button>
                                <b>
                                    {lang === "en"
                                        ?
                                        "Submit"
                                        :
                                        "Gönder"
                                    }
                                </b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp