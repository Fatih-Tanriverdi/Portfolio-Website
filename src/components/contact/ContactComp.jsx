import React, { useState } from 'react';
import { useLang } from '../../context/LangContext.js';
import { db, collection, addDoc } from '../../firebase/firebase.js';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComp = () => {

    const { lang } = useLang();
    const [loading, setLoading] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContactInfo((prev) => ({ ...prev, [name]: value }));
    };

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (contactInfo.name === "" || contactInfo.email === "" || contactInfo.subject === "" || contactInfo.message === "") {
            toast.error("Tüm alanları doldurmanız gerekmektedir.");
        } else {
            try {
                await addDoc(collection(db, 'contact'), {
                    name: contactInfo.name,
                    email: contactInfo.email,
                    subject: contactInfo.subject,
                    message: contactInfo.message
                });

                toast.success("Mesajınız başarıyla gönderildi.");
            } catch (error) {
                console.error(error);
            }
        }

        setContactInfo({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        setLoading(false);
    };

    return (
        <div className='personalWebSiteContactContainer' id='contact'>
            <ToastContainer />
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
                                    <input
                                        onChange={handleInput}
                                        value={contactInfo.name}
                                        name='name'
                                        placeholder={lang === "en"
                                            ?
                                            "Your Name"
                                            :
                                            "İsminiz"
                                        }
                                    />
                                </div>
                                <div className='personalWebSiteContactEmail'>
                                    <input
                                        type='email'
                                        value={contactInfo.email}
                                        onChange={handleInput}
                                        name='email'
                                        placeholder={lang === "en"
                                            ?
                                            "Your E-mail"
                                            :
                                            "E-mail Adresiniz"
                                        } />
                                </div>
                            </div>
                            <div className='personalWebSiteContactSubject'>
                                <input
                                    type='text'
                                    onChange={handleInput}
                                    value={contactInfo.subject}
                                    name='subject'
                                    placeholder={lang === "en"
                                        ?
                                        "Your Subject"
                                        :
                                        "Konu"
                                    } />
                            </div>
                            <div className='personalWebSiteContactMessage'>
                                <textarea
                                    onChange={handleInput}
                                    value={contactInfo.message}
                                    name='message'
                                    placeholder={lang === "en"
                                        ?
                                        "Your Message"
                                        :
                                        "Mesajınız"
                                    } />
                            </div>
                        </div>
                        <div className='personalWebSiteContactContentButton'>
                            {loading ?
                                (
                                    <div className='clipLoaderContainer'>
                                        <ClipLoader color={'#cca478'} />
                                    </div>
                                )
                                :
                                (
                                    <button onClick={submitForm}>
                                        <b>
                                            {lang === "en"
                                                ?
                                                "Submit"
                                                :
                                                "Gönder"
                                            }
                                        </b>
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp