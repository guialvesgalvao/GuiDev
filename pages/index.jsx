import Image from "next/image";
import Link from "next/link";

import { Progress } from "reactstrap";

import iReact from '../public/react.svg';
import iHtml from '../public/html5.svg';
import iBootstrap from '../public/bootstrap.svg';
import iPhp from '../public/php.svg';
import iJs from '../public/js.svg';
import iTs from '../public/typescript.png';
import iMysql from '../public/mysql.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import Logo from '../public/logo-branco.png';
import Aba from '../public/aba.png';
import Simpsons from '../public/simpsons.png';
import Nlw from '../public/nlw.png';
import Colab from '../public/colab.jpeg';


export default function Home() {

  return (
    <div>
      <section >
      <div className="alignTextCentral">
            <span className="textSize1">Hi,this is my Portifolio</span>
            <span className="textSize2">Im a</span>
           <span className="pText typing-animation"> Front End Developer </span>
           <span className="textSize3">and will show you some of my projects</span>
           <div>            
           <Link href="https://www.linkedin.com/in/guilherme-galv%C3%A3o-b7913620b/">
             <FontAwesomeIcon icon={faLinkedinIn} className="iconLinkedin" />
           </Link>
           <Link href="https://github.com/guialvesgalvao">
             <FontAwesomeIcon icon={faGithub} className="iconGithub"/>
           </Link>
           </div>
            
        </div>
      </section>
      <section>
        <div className="skillOrg">
          <div className="skillText">
            <span className="titleSkill">SKILLS</span>
            <p className="pSkill">description about me and about the language, maybe about de react and next developer aplication especiality responsive sites</p>
          </div>
          <div className="containerS">
                    <div className="imgcontainerS">
                        <div className="w100">
                          <span className="titleLang">React/NextJS</span>
                          <Image src={iReact} alt="React" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                            color="danger"
                          >
                            Advanced
                          </Progress>
                        </div>
                        <div className="w100">
                          <span className="titleLang">HTML</span>
                          <Image src={iHtml} alt="Html" className='imgS marginToFix'/>
                          <Progress
                            className="my-2 w80"
                            value={100}
                            color="danger"
                          >
                            Advanced
                          </Progress>
                        </div>
                        <div className="w100">
                          <span className="titleLang">CSS/Bootstrap</span>
                          <Image src={iBootstrap} alt="Bootstrap" className='imgS marginToFix'/>
                          <Progress
                            className="my-2 w80"
                            value={100}
                            color="danger"
                          >
                            Advanced
                          </Progress>
                        </div>
                        <div className="w100">
                          <span className="titleLang">JavaScript</span>
                          <Image src={iJs} alt="Bootstrap" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                            color="danger"
                          >
                            Advanced
                          </Progress>
                        </div>
                        <div className="w100">
                          <span className="titleLang">TypeScript</span>
                          <Image src={iTs} alt="Typescript" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            Basic
                          </Progress>
                        </div>
                        <div className="w100">
                          <span className="titleLang">MySQL</span>
                          <Image src={iMysql} alt="MySQL" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            Basic
                          </Progress>
                        </div>
                        <div className="w100">
                          <span className="titleLang">PHP</span>
                          <Image src={iPhp} alt="Bootstrap" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            Basic
                          </Progress>
                        </div>
                    </div>
                </div>
        </div>
      </section>
      <section>
        <h3 className="titleProjects mt-5">PROJECTS</h3>
        <div className="responsiveProjects">
          <div className="cardStyle">
          <div className="imgProjects mb-2">
            <Image
            src={Colab}
            alt="ColabEduc"
            width={200}
            height={150}
            />
          </div>
            <p>Development front-end of the platform ColabEduc, that contains authentication and pagination for education games</p>
            <div>
                <button className="btnCard">View</button>
              <Link href="https://github.com/guialvesgalvao/ColabEducFrontNextJS">
                <button className="btnCard marginCard">GitHub</button>
              </Link>
            </div>
          </div>
          <div className="cardStyle">
          <div className="imgProjects mb-2">
            <Image
            src={Aba}
            alt="Aba"
            width={200}
            height={150}
            />
          </div>
            <p>Reformulation of Aba Embalagens instutional site in NextJS, a simple touch of modernization </p>
            <div>
              <Link href="https://vermillion-syrniki-e747f8.netlify.app/">
                <button className="btnCard">View</button>
              </Link>
              <Link href="https://github.com/guialvesgalvao/MyBusiness
">
                <button className="btnCard marginCard">GitHub</button>
              </Link>
            </div>
          </div>
          <div className="cardStyle">
          <div className="imgProjects mb-2">
            <Image
            src={Simpsons}
            alt="Aba"
            width={200}
            height={150}
            />
          </div>
            <p>The Simpson&apos;s Quiz is a education game for the platform ColabEduc, developed with NextJS</p>
            <div className="positionBtnProjects">
              <Link href="https://cozy-cactus-a4e854.netlify.app/">
                <button className="btnCard">View</button>
              </Link>
              <Link href="https://github.com/guialvesgalvao/quiz-simpsons">
                <button className="btnCard marginCard">GitHub</button>
              </Link>
            </div>
          </div>
          <div className="cardStyle">
          <div className="imgProjects mb-2">
            <Image
            src={Nlw}
            alt="Next Level Week"
            width={200}
            height={150}
            />
          </div>
            <p>Development platform to listen podcasts, very similar to Spotify, made in Next Level Week</p>
            <div>
                <button className="btnCard">View</button>
              <Link href="https://github.com/guialvesgalvao/ProjetoNLWRocketSeat">
                <button className="btnCard marginCard">GitHub</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}