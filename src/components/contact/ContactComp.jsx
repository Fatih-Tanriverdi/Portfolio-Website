import React from 'react'

const ContactComp = () => {
    return (
        <div className='personalWebSiteContactContainer' id='contact'>
            <div className='personalWenSiteContactBody'>
                <div className='personalWebSiteContactContent'>
                    <div className='personalWebSiteContactContentLeft'>
                        <h1>Contact Me</h1>
                        <div className='personalWebSiteContactContentInputGroup'>
                            <div className='personalWebSiteContactContentInputGroupTop'>
                                <div className='personalWebSiteContactNameInput'>
                                    <input type='text' placeholder='Your Name' />
                                </div>
                                <div className='personalWebSiteContactEmail'>
                                    <input type='text' placeholder='Your E-mail' />
                                </div>
                            </div>
                            <div className='personalWebSiteContactSubject'>
                                <input type='text' placeholder='Your Subject' />
                            </div>
                            <div className='personalWebSiteContactMessage'>
                                <textarea placeholder='Your Message'/>
                            </div>
                        </div>
                        <div className='personalWebSiteContactContentButton'>
                            <button><b>Submit</b></button>
                        </div>
                    </div>
                    <div className='personalWebSiteContactContentRight'>
                        <img src='/images/Fatih_Tan_Emoji.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp