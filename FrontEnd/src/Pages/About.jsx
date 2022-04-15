import React from "react";
import "../styles/about.css";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.png";
import about3 from "../assets/about-3.jpg";

const About = () => {
  return (
    <div className="about-box">
      <div className="about-item">
        <div className="about-item__info">
          <h1>Cafe de Especialidad</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quod facilis fugiat. Expedita labore obcaecati debitis sequi ullam
            libero unde ipsa provident soluta explicabo facere at, maiores
            impedit excepturi voluptas laborum consequuntur! Itaque aspernatur
            porro eligendi veniam voluptatum eveniet inventore impedit
            provident, magni similique accusamus perspiciatis odio sunt pariatur
            corrupti?
          </p>
        </div>
        <div className="about-item__img">
          <img src={about2} alt="Specialty Coffe" />
        </div>
      </div>
      <div className="about-item">
        <div className="about-item__img">
          <img src={about1} alt="Specialty Coffe" />
        </div>
        <div className="about-item__info">
          <h1>Que hace nuestro cafe Especial?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            enim excepturi perspiciatis voluptas ducimus totam vel, obcaecati
            molestias, explicabo iure earum pariatur hic eaque, officiis quas.
            Temporibus perferendis hic nulla rem! Voluptates velit tempore
            distinctio optio hic omnis facilis. Est sunt doloribus quos quasi
            numquam aut, cumque voluptate explicabo maxime?
          </p>
        </div>
      </div>
      <div className="about-item last">
        <div className="about-item__info">
          <h1>Como obtenemos el cafe de especialidad?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quod facilis fugiat. Expedita labore obcaecati debitis sequi ullam
            libero unde ipsa provident soluta explicabo facere at, maiores
            impedit excepturi voluptas laborum consequuntur! Itaque aspernatur
            porro eligendi veniam voluptatum eveniet inventore impedit
            provident, magni similique accusamus perspiciatis odio sunt pariatur
            corrupti?
          </p>
        </div>
        <div className="about-item__img">
          <img src={about3} alt="Specialty Coffe" />
        </div>
      </div>
    </div>
  );
};

export default About;
