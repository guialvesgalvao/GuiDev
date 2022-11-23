import Image from "next/image";
import Link from "next/link";

import { Progress } from "reactstrap";

import iReact from '../public/react.svg';
import iHtml from '../public/html5.svg';
import iBootstrap from '../public/bootstrap.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import Logo from '../public/logo-branco.png';
import Aba from '../public/aba.png';
import Simpsons from '../public/simpsons.png';


export default function Home() {

  return (
    <div>
      <section >
      <div className="alignTextCentral">
            <span className="textSize1">Hi,this is my Portifolio</span>
            <span className="textSize2">Im a</span>
           <span className="pText typing-animation"> Front End Developer </span>
           <span className="textSize3">and will show you some of my projects</span>
           <div>            <FontAwesomeIcon icon={faLinkedinIn} className="iconLinkedin" />
           <FontAwesomeIcon icon={faGithub} className="iconGithub"/>
           </div>
            
        </div>
      </section>
      <section>
        <div className="skillOrg">
          <div className="skillText">
            <span className="titleSkill">Skill</span>
            <p>description about me and about the language, maybe about de react and next developer aplication especiality</p>
          </div>
          <div className="containerS">
                    <div className="imgcontainerS">
                        <div className="w100">
                          <span>React</span>
                          <Image src={iReact} alt="React" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            basic
                          </Progress>
                        </div>
                        <div className="w100">
                          <span>Html</span>
                          <Image src={iHtml} alt="Html" className='imgS marginToFix'/>
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            basic
                          </Progress>
                        </div>
                        <div className="w100">
                          <span>Bootstrap</span>
                          <Image src={iBootstrap} alt="Bootstrap" className='imgS marginToFix'/>
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            basic
                          </Progress>
                        </div>
                        <div className="w100">
                          <span>React</span>
                          <Image src={Logo} alt="asddsa" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            basic
                          </Progress>
                        </div>
                        <div className="w100">
                          <span>React</span>
                          <Image src={Logo} alt="asddsa" className='imgS marginToFix' />
                          <Progress
                            className="my-2 w80"
                            value={100}
                          >
                            basic
                          </Progress>
                        </div>
                    </div>
                </div>
        </div>
      </section>
      <section>
        <h3 className="container mt-3">Projects</h3>
        <div className="cardStyle">
        <Image 
        src={Aba}
        alt="Aba"
        width={200}
        height={150}
        className="imgProjects"
        />
          <p>Development front-end of the platform ColabEduc, that contains authentication and pagination for education games</p>
          <div>
            <button className="btnCard">View</button>
            <button className="btnCard marginCard">GitHub</button>
          </div>
        </div>
        <div className="cardStyle">
        <Image 
        src={Aba}
        alt="Aba"
        width={200}
        height={150}
        className="imgProjects"
        />
          <p>Reformulation of Aba Embalagens instutional site </p>
          <div>
            <button className="btnCard">View</button>
            <button className="btnCard marginCard">GitHub</button>
          </div>
        </div>
        <div className="cardStyle">
        <Image 
        src={Simpsons}
        alt="Aba"
        width={200}
        height={150}
        className="imgProjects"
        />
          <p>Education game for the platform ColabEduc, developed with NextJS</p>
          <div>
            <button className="btnCard">View</button>
            <button className="btnCard marginCard">GitHub</button>
          </div>
        </div>
        <div className="cardStyle">
        <Image 
        src={Aba}
        alt="Aba"
        width={200}
        height={150}
        className="imgProjects"
        />
          <p>Development platform to listen podcasts, very similar to Spotify, made in Next Level Week</p>
          <div>
            <button className="btnCard">View</button>
            <button className="btnCard marginCard">GitHub</button>
          </div>
        </div>
      </section>
    </div>
    )
}