import React from 'react'
import '../../scss/styles.scss'
import HeaderComp from '../../components/header/HeaderComp'
import BodyComp from '../../components/body/BodyComp'
import AboutComp from '../../components/about/AboutComp'
import FooterComp from '../../components/footer/FooterComp'
import ProjectsComp from '../../components/projects/ProjectsComp'

const Home = () => {

    return (
        <div>
            <HeaderComp />
            <BodyComp />
            <AboutComp />
            <ProjectsComp />
            <FooterComp />
        </div>
    )
}

export default Home