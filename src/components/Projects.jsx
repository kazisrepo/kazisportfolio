{
  /*Developed by: Kazi Islam
ID: 301163646
September 29, 2024
*/
}
import React from "react";
import GearImg from "../assets/gears.png";
import Footer from "./Footer";
import ProjectImage1 from "../assets/project1.png";
import ProjectImage2 from "../assets/project2.png";
import ProjectImage3 from "../assets/project3.png";

const Projects = () => {
  return (
    <div>
      <div className="container">
        <section className="intro pb-1">
          <div className="row">
            <div className="col-5">
              <img src={GearImg} style={{ width: "80%", height: "auto" }} />
            </div>
            <div className="col-7">
              <p className="strong-text mb-5">My works</p>
              <p className="elevator-pitch">
                Bringing
                <span className="highlight highlight-purple">
                  versatile
                </span>{" "}
                value to development teams, I am a software
                <span className="highlight highlight-purple">developer</span>
                with expertise in business analysis.
              </p>
              <hr />
            </div>
          </div>
        </section>

        <section className="projects p-3" id="section-projects">
          <h3>These are some of my academic projects done in Semester 2</h3>
          <hr></hr>
          <div className="row mb-3 project">
            <div className="col-2">
              <a href="https://github.com/kazisrepo/vanilla-js-exercises/tree/main/etch-a-sketch">
                <img src={ProjectImage1} className="project-image"></img>
              </a>
            </div>
            <div className="col-10">
              <h6>
                <a href="https://github.com/kazisrepo/vanilla-js-exercises/tree/main/etch-a-sketch">
                  Etch a sketch (click to see GitHub)
                </a>
              </h6>
              <p>This was a assignment project made from vanilla javascript</p>
              <p>My Role: I developed it myself</p>
              <p>Technology used: HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="row mb-3 project-alternate">
            <div className="col-2">
              <a href="https://github.com/kazisrepo/vanilla-js-exercises/tree/main/bug-smasher">
                <img src={ProjectImage2} className="project-image"></img>
              </a>
            </div>
            <div className="col-10">
              <h6>
                <a href="https://github.com/kazisrepo/vanilla-js-exercises/tree/main/bug-smasher">
                  Bug Smasher (click to see GitHub)
                </a>
              </h6>
              <p>This was a bug smasher game made from vanilla javascript</p>
              <p>My Role: I developed it myself</p>
              <p>Technology used: HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="row mb-3 project">
            <div className="col-2">
              <a href="https://github.com/kazisrepo/vanilla-js-exercises/tree/main/calculator">
                <img src={ProjectImage3} className="project-image"></img>
              </a>
            </div>
            <div className="col-10">
              <h6>
                <a href="https://github.com/kazisrepo/vanilla-js-exercises/tree/main/calculator">
                  Calculator (click to see GitHub)
                </a>
              </h6>
              <p>
                This was a on screen calculator made from vanilla javascript
              </p>
              <p>My Role: I developed it myself</p>
              <p>Technology used: HTML, CSS, JavaScript</p>
            </div>
          </div>
        </section>
      </div>
      <button id="btnScrollToTop" className="float-button">
        Top
      </button>
      <Footer />
    </div>
  );
};

export default Projects;
