import React from "react";
import data from "../data.js";
import "../styles/projects.scss";
function Projects() {
  return (
    <div className="container">
      <div className="blur">
        <div className="projects ">
          {data.map((data) => (
            <div class="card bounce-in-top">
              <img src={data.urlImage} alt="" className="card-img"/>
              <ul class="social-media">
                <li><a href={data.demo}target="_blank">Demo</a></li>
                <li><a href={data.repo}target="_blank">Repo</a></li>
              </ul>
              <div class="card-info">
                <p class="title">{data.nombre}</p>
                <p class="subtitle">{data.descripcion}</p>
                <p class="subtitle">Tecnologias empleadas: {data.tecnologias}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
