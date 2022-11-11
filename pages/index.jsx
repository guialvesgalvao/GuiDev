import Image from "next/image";
import site from '../public/criacoes.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub,faLinkedinIn,faGithubAlt,faSquareGithub} from '@fortawesome/free-brands-svg-icons';

// botao com backgc azul e borda branca, when hover, fill with white


export default function Home() {

  return (
    <div className="">
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
        <h4 className="container">Skills</h4>
        <div className="skillOrg">
          <p>description about me and about the language, maybe about de react and next developer aplication especiality</p>
          <div className="cardSkill">
            <span>React</span>
            <span>imageeee</span>
            <span>skill bar</span>
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