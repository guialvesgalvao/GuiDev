import Image from "next/image";
import Logo from '../public/logo-branco.png';
import iReact from '../public/react.svg';
import iHtml from '../public/html5.svg';
import iBootstrap from '../public/bootstrap.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

// botao com backgc azul e borda branca, when hover, fill with white

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
                        <div>
                          <span>React</span>
                          <Image src={iReact} alt="React" className='imgS'/>
                          <span>bar</span>
                        </div>
                        <div>
                          <span>Html</span>
                          <Image src={iHtml} alt="Html" className='imgS'/>
                          <span>bar</span>
                        </div>
                        <div>
                          <span>Bootstrap</span>
                          <Image src={iBootstrap} alt="Bootstrap" className='imgS'/>
                          <span>bar</span>
                        </div>
                        <div>
                          <span>React</span>
                          <Image src={Logo} alt="asddsa" className='imgS' />
                          <span>bar</span>
                        </div>
                        <div>
                          <span>React</span>
                          <Image src={Logo} alt="asddsa" className='imgS' />
                          <span>bar</span>
                        </div>
                    </div>
                </div>
        </div>
      </section>
      <section>
        <h3 className="container">Projects</h3>
        <div className="cardStyle">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ipsa </p>
          <button className="btnCard">View</button>
          <button className="btnCard marginCard">GitHub</button>
        </div>
        <div className="cardStyle">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ipsa </p>
          <button className="btnCard">View</button>
          <button className="btnCard marginCard">GitHub</button>
        </div>
        <div className="cardStyle">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ipsa </p>
          <button className="btnCard">View</button>
          <button className="btnCard marginCard">GitHub</button>
        </div>
        <div className="cardStyle">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ipsa </p>
          <button className="btnCard">View</button>
          <button className="btnCard marginCard">GitHub</button>
        </div>
      </section>
    </div>
    )
}