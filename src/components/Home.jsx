import React, {useState} from "react";
import "../styles/home.scss";
import Roman from "../assets/Roman_Benitez.png";
import {AiFillLinkedin} from "react-icons/ai";
import {IoMailSharp} from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";


export default function Home() {
const [animationTiming, setAnimationTiming] = useState(100)
for(let i = 0; i<2; i++){
  setTimeout(() => {
    setAnimationTiming(animationTiming + 100)
  }, animationTiming)
}
  return (
    <div className="container">
      <div className="blur">
        <div className="subcontainer-home-1 bounce-in-top">
          <h2>Hola</h2>
          <h1>
            soy <span>Roman Benitez</span>
          </h1>
          <h2>Desarrollador web fullstack</h2>
          <div className="social-icons-container ">
          <a href="https://github.com/romanjbenitez" target="_blank"><FaGithubAlt className={animationTiming >=  100 ?  "social-icons slide-top" : 'social-icons'}/></a>
        <a href="https://www.linkedin.com/in/romanjbenitez/" target="_blank"><AiFillLinkedin className={animationTiming >=  200 ?  "social-icons slide-top" : 'social-icons'} /></a>
        <a href="mailto:roman200217@gmail.com"><IoMailSharp className={animationTiming >=  300 ?  "social-icons slide-top" : 'social-icons'} /></a>
          </div>
        </div>
        <div className="subcontainer-home-2 bounce-in-top">
          <img src={Roman} alt="" />
        </div>
      </div>
    </div>
  );
}
