import React, {useState} from "react";
import "../styles/header.scss";
import Logo from "../assets/Logo.png";
import {AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineBook, AiFillLinkedin ,AiFillMail} from "react-icons/ai";
import { IoPaperPlaneOutline, IoMailSharp } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";



function Header() {

const [active, setActive] = useState(0)


  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
        <p>Roman Benitez</p>
      </div>
      <div className="nav">
        <div className={active ===  0 ?  "link active" : 'link'} onClick={() => {setActive(0)}}>
          <a href="#"><p><AiOutlineHome/></p> <span>INICIO</span></a>
        </div>
        <div className={active ===  1 ?  "link active" : 'link'}  onClick={() => {setActive(1)}}>
          
          <a href="#"><p><AiOutlineBook/></p><span>SOBRE MI</span></a>
        </div>
        <div className={active ===  2 ?  "link active" : 'link'}  onClick={() => {setActive(2)}}>
          
          <a href="#"><p><AiOutlineAppstoreAdd /></p><span>PROYECTOS</span></a>
        </div>
        <div className={active ===  3 ?  "link active" : 'link'}  onClick={() => {setActive(3)}}>
          <a href="#"><p><IoPaperPlaneOutline /></p><span>CONTACTO</span></a>
        </div>
      </div>
      <div className="social-icons-container">
        <FaGithubAlt className="social-icons"/>
        <AiFillLinkedin className="social-icons"/>
        <IoMailSharp className="social-icons"/>
      </div>
    </div>
  );
}

export default Header;
