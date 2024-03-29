import React from 'react'
import '../../scss/styles.scss'
import HeaderComp from '../../components/header/HeaderComp'
import BodyComp from '../../components/body/BodyComp'
import AboutComp from '../../components/about/AboutComp'
import FooterComp from '../../components/footer/FooterComp'
import ProjectsComp from '../../components/projects/ProjectsComp'
import ContactComp from '../../components/contact/ContactComp'
import SkillsComp from '../../components/skills/SkillsComp'
import ScrollButton from '../../components/scroolButton/ScroolButton'

const Home = () => {

    return (
        <div>
            <HeaderComp />
            <BodyComp />
            <AboutComp />
            <ProjectsComp />
            <SkillsComp />
            <ContactComp />
            <FooterComp />
            <ScrollButton />
        </div>
    )
}

export default Home