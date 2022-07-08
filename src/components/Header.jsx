import React, {useState} from "react";
import "../styles/header.scss";
import Logo from "../assets/Logo.png";
import {AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineBook, AiFillLinkedin ,AiFillMail} from "react-icons/ai";
import { IoPaperPlaneOutline, IoMailSharp } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import {Link} from "react-router-dom"


function Header() {
const url = window.location.toString();
const [active, setActive] = useState(url.includes("about") ? 1 : url.includes("projects") ? 2 : url.includes("contact") ? 3 : 0)
const [animationTiming, setAnimationTiming] = useState(100)
for(let i = 0; i<2; i++){
  setTimeout(() => {
    setAnimationTiming(animationTiming + 100)
  }, animationTiming)
}

  return (
    <div className="header slide-in-left">
      <div className="logo">
        <img src={Logo} alt="" />
        <p>Roman Benitez</p>
      </div>
      <div className="nav">
        <div className={active ===  0 ?  "link active" : 'link'} onClick={() => {setActive(0)}}>
        <Link to="/"> <p><AiOutlineHome/></p> <span>INICIO</span></Link>

         
        </div>
        <div className={active ===  1 ?  "link active" : 'link'}  onClick={() => {setActive(1)}}>
        <Link to="/about"><p><AiOutlineBook/></p><span>SOBRE MI</span></Link>
          
        </div>
        <div className={active ===  2 ?  "link active" : 'link'}  onClick={() => {setActive(2)}}>
        <Link to="/projects"><p><AiOutlineAppstoreAdd /></p><span>PROYECTOS</span></Link>
          
        </div>
        <div className={active ===  3 ?  "link active" : 'link'}  onClick={() => {setActive(3)}}>
        <Link to="/contact"><p><IoPaperPlaneOutline /></p><span>CONTACTO</span></Link>
          
        </div>
      </div>
      <div className="social-icons-container">
      <a href="https://github.com/romanjbenitez" target="_blank"><FaGithubAlt className={animationTiming >=  100 ?  "social-icons slide-top" : 'social-icons'}/></a>
        <a href="https://www.linkedin.com/in/romanjbenitez/" target="_blank"><AiFillLinkedin className={animationTiming >=  200 ?  "social-icons slide-top" : 'social-icons'} /></a>
        <a href="mailto:roman200217@gmail.com"><IoMailSharp className={animationTiming >=  300 ?  "social-icons slide-top" : 'social-icons'} /></a>
      </div>
    </div>
  );
}

export default Header;
