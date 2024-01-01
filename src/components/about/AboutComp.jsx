import React from 'react'
import '../../scss/styles.scss'
import { useLang } from '../../context/LangContext';

const AboutComp = () => {

    const { lang } = useLang();

    return (
        <div className='personalWebSiteAboutContainer'>
            <div className='personalWebSiteAboutContent' id='about'>
                <div className='personalWebSiteAboutContentLeft'>
                    <p>
                        {lang === "en" ?
                            "Hello, My name is Fatih, I'm an energetic individual dedicated to continuous self-improvement. After graduating, I embarked on a journey to enhance my skills in the field of software development. Given my prior exposure to web programming courses during high school, I am currently aiming to build upon that knowledge and become a Front-End Developer, aspiring to establish a career in this domain."
                            :
                            "Merhaba, Ben Fatih, enerjik ve kendini sürekli geliştirmeye adayan biriyim. Mezuniyetimden sonra yazılım alanında kendimi geliştirmeye başladım. Lise yıllarında web programcılığı dersleri aldığım için, şu anda o bilgilerin üzerine ekleyerek kendimi bir Front-End geliştirici olarak geliştirmeyi hedefliyorum ve bu alanda kariyer yapmak istiyorum."
                        }
                        <br />
                        <br />
                        {lang === "en" ?
                            "In the realm of software, I am committed to staying abreast of new technologies and trends. I possess knowledge and experience in HTML, CSS, JavaScript, TypeScript and React, constantly honing these skills through ongoing project work."
                            :
                            "Yazılım dünyasında kendimi geliştirmek için sürekli yeni teknolojilere ve trendlere odaklanıyorum. HTML, CSS, JavaScript, React konularında bilgi ve deneyime sahibim ve bu becerilerimi daha da ilerletmek için sürekli olarak projeler üzerinde çalışıyorum."
                        }
                        <br />
                        <br />
                        {lang === "en" ?
                            "I am open to learning and quick adaptation. With my creative mindset, problem-solving abilities, and effective communication skills, I am prepared to contribute to team projects. Pursuing a career in Front-End development, I am actively seeking opportunities to engage in projects and gain valuable experience."
                            :
                            "Öğrenmeye ve hızla adapte olmaya açığım. Yaratıcı, sorun çözme becerilerim ve iletişim yeteneğim sayesinde takım projelerine katkıda bulunmak için hazırım. Front-end geliştirme alanında kariyer yapma hedefimle, projelerde yer almak ve deneyim kazanmak için fırsatlar arıyorum."
                        }
                    </p>
                </div>
                <div className='personalWebSiteAboutContentRight'>
                    <img src='/images/Emoji_About.png' alt='' />
                </div>
            </div>
        </div>
    )
}

export default AboutComp