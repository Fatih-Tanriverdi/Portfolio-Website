import React from 'react'
import { Progress } from "antd"
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiGit } from "react-icons/si";
import { useLang } from '../../context/LangContext';

const SkillsComp = () => {

    const { lang } = useLang();

    return (
        <div className='personalWebSiteSkillsContainer' id='skills'>
            <div className='personalWenSiteSkillsBody'>
                <div className='personalWebSiteSkillsContent'>
                    <h1>PROFESSIONAL SKILLS
                        <br />
                        <p>MY <h4>Talent</h4></p>
                    </h1>
                    <div className='personalWebSiteSkillsContentProgressCard'>
                        <div className='personalWebSiteSkillsContentProgressCardLeft'>
                            <Progress
                                type="dashboard"
                                size={125}
                                percent={"80"}
                                strokeColor={"#182840"}
                            />
                        </div>
                        <div className='personalWebSiteSkillsContentProgressCardRight'>
                            <div className='personalWebSiteSkillsContentProgressCardTitle'>
                                <i><RiJavascriptFill /></i>
                                <h1>JavaScript</h1>
                            </div>
                            <p>
                                {lang === "en" ?
                                    "In addition to JavaScript, I have knowledge about jQuery, the Document Object Model (DOM), and APIs, including RESTful APIs."
                                    :
                                    "JavaScript dışında jQuery, Belge Nesne Modeli (DOM) ve RESTful API'lar da dahil olmak üzere API'lar hakkında bilgi sahibiyim."
                                }
                            </p>
                        </div>
                    </div>
                    <div className='personalWebSiteSkillsContentProgressCard'>
                        <div className='personalWebSiteSkillsContentProgressCardLeft'>
                            <Progress
                                type="dashboard"
                                size={125}
                                percent={"75"}
                                strokeColor={"#182840"}
                            />
                        </div>
                        <div className='personalWebSiteSkillsContentProgressCardRight'>
                            <div className='personalWebSiteSkillsContentProgressCardTitle'>
                                <i><FaReact /></i>
                                <h1>React</h1>
                            </div>
                            <p>
                                {lang === "en" ?
                                    "I create responsive user interfaces using React and specialize in innovative and modern design."
                                    :
                                    "Ben, React kullanarak duyarlı kullanıcı arayüzleri oluşturan ve yenilikçi ve modern tasarıma odaklanan bir uzmanım. "
                                }
                            </p>
                        </div>
                    </div>
                    <div className='personalWebSiteSkillsContentProgressCard'>
                        <div className='personalWebSiteSkillsContentProgressCardLeft'>
                            <Progress
                                type="dashboard"
                                size={125}
                                percent={"45"}
                                strokeColor={"#182840"}
                            />
                        </div>
                        <div className='personalWebSiteSkillsContentProgressCardRight'>
                            <div className='personalWebSiteSkillsContentProgressCardTitle'>
                                <i><BiLogoTypescript /></i>
                                <h1>TypeScript</h1>
                            </div>
                            <p>
                                {lang === "en" ?
                                    "I have recently started learning TypeScript and am rapidly improving in this area. Currently, I have an intermediate level of knowledge in TypeScript."
                                    :
                                    "Son zamanlarda TypeScript öğrenmeye başladım ve bu alanda hızla ilerliyorum. Şu anda TypeScript konusunda orta düzeyde bir bilgi seviyem var."
                                }
                            </p>
                        </div>
                    </div>
                    <div className='personalWebSiteSkillsContentProgressCard'>
                        <div className='personalWebSiteSkillsContentProgressCardLeft'>
                            <Progress
                                type="dashboard"
                                size={125}
                                percent={"85"}
                                strokeColor={"#182840"}
                            />
                        </div>
                        <div className='personalWebSiteSkillsContentProgressCardRight'>
                            <div className='personalWebSiteSkillsContentProgressCardTitle'>
                                <i><IoLogoCss3 /></i>
                                <h1>CSS</h1>
                            </div>
                            <p>
                                {lang === "en" ?
                                    "My knowledge of HTML and CSS is at an advanced level, and I have completed numerous projects. I also have expertise in Sass, SCSS, and Bootstrap."
                                    :
                                    "HTML ve CSS bilgim ileri seviyede olup birçok projeyi başarıyla tamamladım. Ayrıca Sass, SCSS ve Bootstrap konularında uzmanlığa sahibim."
                                }
                            </p>
                        </div>
                    </div>
                    <div className='personalWebSiteSkillsContentProgressCard'>
                        <div className='personalWebSiteSkillsContentProgressCardLeft'>
                            <Progress
                                type="dashboard"
                                size={125}
                                percent={"65"}
                                strokeColor={"#182840"}
                            />
                        </div>
                        <div className='personalWebSiteSkillsContentProgressCardRight'>
                            <div className='personalWebSiteSkillsContentProgressCardTitle'>
                                <i><SiGit /></i>
                                <h1>GIT</h1>
                            </div>
                            <p>
                                {lang === "en" ?
                                    "I have a moderate level of knowledge in Git and can actively use Git and GitHub."
                                    :
                                    "Git ve GitHub kullanımında orta düzeyde bilgi sahibiyim."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsComp