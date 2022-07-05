import React from "react";
import "../styles/header.scss";
import Logo from "../assets/Logo.png";
import {AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineBook, AiFillLinkedin ,AiFillMail} from "react-icons/ai";
import { IoPaperPlaneOutline, IoMailSharp } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";



function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
        <p>Roman Benitez</p>
      </div>
      <div className="nav">
        <div className="link">
          <p><AiOutlineHome/></p>
          <a href="">INICIO</a>
        </div>
        <div className="link">
          <p><AiOutlineBook/></p>
          <a href="">SOBRE MI</a>
        </div>
        <div className="link">
          <p><AiOutlineAppstoreAdd /></p>
          <a href="">PROYECTOS</a>
        </div>
        <div className="link">
          <p><IoPaperPlaneOutline /></p>
          <a href="">CONTACTO</a>
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
