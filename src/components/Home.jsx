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
             <FaGithubAlt className={animationTiming >=  100 ?  "social-icons slide-top2" : 'social-icons'}/>
             <AiFillLinkedin className={animationTiming >=  200 ?  "social-icons slide-top2" : 'social-icons'} />
             <IoMailSharp className={animationTiming >=  300 ?  "social-icons slide-top2" : 'social-icons'} />
          </div>
        </div>
        <div className="subcontainer-home-2 bounce-in-top">
          <img src={Roman} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
