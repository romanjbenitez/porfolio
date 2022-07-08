import React from "react";
import data from "../data.js";
import "../styles/projects.scss";
import Project1 from "../assets/Proyecto1.png";
import Project2 from "../assets/Proyecto2.png";
import Project3 from "../assets/Proyecto3.png";
import Project4 from "../assets/Proyecto4.png";
import Project5 from "../assets/Proyecto5.png";
import Project6 from "../assets/Proyecto6.png";

function Projects() {
  return (
    <div className="container">
      <div className="blur">
        <div className="projects ">
          {data.map((data) => (
            <div class="card bounce-in-top">
              <img
                src={
                  data.urlImage === "Proyecto1"
                    ? Project1
                    : data.urlImage === "Proyecto2"
                    ? Project2
                    : data.urlImage === "Proyecto3"
                    ? Project3
                    : data.urlImage === "Proyecto4"
                    ? Project4
                    : data.urlImage === "Proyecto5"
                    ? Project5
                    : Project6
                }
                alt={
                  data.urlImage === "Proyecto1"
                    ? Project1
                    : data.urlImage === "Proyecto2"
                    ? Project2
                    : data.urlImage === "Proyecto3"
                    ? Project3
                    : data.urlImage === "Proyecto4"
                    ? Project4
                    : data.urlImage === "Proyecto5"
                    ? Project5
                    : Project6
                }
                className="card-img"
              />
              <ul class="social-media">
                <li>
                  <a href={data.demo} target="_blank">
                    Demo
                  </a>
                </li>
                <li>
                  <a href={data.repo} target="_blank">
                    Repo
                  </a>
                </li>
              </ul>
              <div class="card-info">
                <p class="title">{data.nombre}</p>
                <p class="subtitle">{data.descripcion}</p>
                <p class="subtitle">
                  Tecnologias empleadas: {data.tecnologias}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
