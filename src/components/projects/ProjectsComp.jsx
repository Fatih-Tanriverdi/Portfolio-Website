import React from 'react'
import '../../scss/styles.scss'
import { useLang } from '../../context/LangContext';
import $ from 'jquery';

const ProjectsComp = () => {

    const { lang } = useLang();

    function rotate() {
        var lastChild = $('.slider div:last-child').clone(); // Use $ for jQuery
        $('.slider div').removeClass('firstSlide');
        $('.slider div:last-child').remove();
        $('.slider').prepend(lastChild);
        $(lastChild).addClass('firstSlide');
    }

    window.setInterval(function () {
        rotate();
    }, 4000);

    return (
        <div className='personalWebSiteProjectsContainer' id='projects'>
            <div className='personalWebSiteProjects'>
                <div className='personalWebSiteProjectsContentArcanis'>
                    <div className='personalWebSiteProjectsContentLeft'>
                        <img className='arcanisCustomerImage' src='/images/Arcanis_Customer.png' alt='' />
                        <img className='arcanisAdminImage' src='/images/Arcanis_Admin.png' alt='' />
                        <img className='arcanisLoginImage' src='/images/Arcanis_Login_Page.png' alt='' />
                    </div>
                    <div className='personalWebSiteProjectsContentRight'>
                        <h1>Arcanis</h1>
                        <p>
                            {lang === "en" ?
                                "The Arcanis project consists of screens encompassing ticket sales and management. The admin panel allows for operations related to data such as vehicles, tickets, routes, users, while also displaying statistics. On the customer page, users can perform ticket purchase transactions, and purchased tickets can be viewed. In the project development process, HTML, CSS, JavaScript, React.js, Ant Design, OData, and React Router have been utilized. Data is retrieved from the API and sent in real-time."
                                :
                                "Arcanis projesi, bilet satışı ve yönetimini içeren ekranlardan oluşmaktadır. Yönetim panelinde araç, bilet, sefer, kullanıcı gibi verilerle ilgili işlemler aynı zamanda istatistikler gösterilir. Müşteri sayfasında kullanıcılar, bilet satın alma işlemleri gerçekleştirebilmektedirler. Satın alınan biletler görüntülenebilmektedir. Proje geliştirme sürecinde HTML, CSS, JavaScript, React.js, Ant Design, OData ve React Router kullanılmıştır. Veriler API'dan alınarak anlık olarak gönderilmiştir."
                            }
                        </p>
                    </div>
                </div>
                <div className='personalWebSiteProjectsContentNetflix'>
                    <div className='personalWebSiteProjectsContentNetflixRight'>
                        <img className='netflixAuth' src='/images/Netflix_Kullanıcı_Girişi.png' alt='' />
                        <img className='netflixBody' src='/images/Netflix_Body.png' alt='' />
                        <img className='netflixMainPage' src='/images/Netflix_Anasayfa.png' alt='' />
                    </div>
                    <div className='personalWebSiteProjectsContentNetflixLeft'>
                        <h1>Netflix - Clone</h1>
                        <p>
                            {lang === "en" ?
                                "This project is a replica of Netflix created using JavaScript, React, and Firebase. It is a web application that dynamically displays Netflix-like content and allows users to save their favorite content. Functionality for user authentication and data storage has been added using Firebase."
                                :
                                "Bu proje, JavaScript, React ve Firebase kullanılarak oluşturulmuş bir Netflix replikasıdır. Netflix benzeri içerikleri dinamik olarak gösteren, kullanıcıların favori içeriklerini kaydetmelerine olanak tanıyan bir web uygulamasıdır. Firebase ile kullanıcı kimlik doğrulama ve veri saklama işlevselliği eklenmiştir."
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsComp