import React from "react";
import "../styles/about.scss";
import {ImGit} from "react-icons/im";
import {FaJava, FaVuejs} from "react-icons/fa";
import {SiSpring, SiPostgresql , SiMongodb} from "react-icons/si";
import {IoLogoJavascript , IoLogoSass, IoLogoReact, IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

function About() {
  return (
    <div className="container height">
      <div className="blur about">
        <div className="subcontainer-about">
          <h2>Sobre mi</h2>
          <p>
            Hola, me llamo Roman,soy apasionado por la tecnología y
            desarrollador web full stack junior, tengo gran capacidad de
            absorción de conocimientos y me gusta superar mis objetivos
            constantemente, además disfruto trabajar en equipo y ayudar a los
            demás.
            <p>
              En julio 2022, me gradué del bootcamp de desarrollo Full Stack
              Java en MindHub LA en donde inverti más 700 hs para educarme y
              desarrollar múltiples proyectos, tanto de manera individual, como
              en grupo los mismos fueron realizados utilizando metodologías
              ágiles (SCRUM), y desarrollados en múltiples tecnologías y
              frameworks como VueJs para front end y Spring con java para el
              back end.
            </p>
            <p>
              Actualmente me encuentro en búsqueda de mi primer empleo en la
              industria, en donde se me permita demostrar mis habilidades y su
              vez poder aprender mucho en el proceso.
            </p>
          </p>
          <button class="button"> Descargar CV</button>
        </div>
        <div className="subcontainer-about2">
          <h2>Tecnologías</h2>
          <div className="tech-container">
            <div className="tech"><p>JAVA</p><FaJava/></div>
            <div className="tech"><p>JAVASCRIPT</p><IoLogoJavascript/></div>
            <div className="tech"><p>SPRING</p><SiSpring/></div>
            <div className="tech"><p>REACT</p><IoLogoReact/></div>
            <div className="tech"><p>SASS</p><IoLogoSass/></div>
            <div className="tech"><p>GIT</p><ImGit/></div>
            <div className="tech"><p>NODEJS</p><IoLogoNodejs/></div>
            <div className="tech"><p>HTML5</p><IoLogoHtml5/></div>
            <div className="tech"><p>CSS3</p><IoLogoCss3/></div>
            <div className="tech"><p>POSTGRESQL</p><SiPostgresql/></div>
            <div className="tech"><p>MONGODB</p><SiMongodb/></div>
            <div className="tech"><p>VUEJS</p><FaVuejs/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
