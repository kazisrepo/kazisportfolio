{
  /*Developed by: Kazi Islam
ID: 301163646
September 29, 2024
*/
}
import React from "react";
import KaziPic from "../assets/kazi.png";
import GoalsImage from "../assets/goals.png";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div className="container">
        <section id="welcome">
          <div className="row">
            <div className="col-4">
              <img src={KaziPic} className="kazi-img" />
            </div>
            <div className="col-8">
              <p className="strong-text mb-5">Hi, I am Kazi.</p>
              <p className="elevator-pitch">
                I am
                <span className="highlight highlight-yellow">
                  passionate
                </span>{" "}
                about creating innovative software solutions that
                <span className="highlight highlight-yellow">empower</span>{" "}
                businesses and elevate user experiences.
              </p>
              <hr />
              <p>
                My primary focus is .NET software development, but I have also
                gained experience with Java, Oracle, Python, Node.js,
                Express.js, and React through numerous personal projects.
              </p>
              <a href="/about" className="btn btn-primary">
                About me
              </a>
            </div>
          </div>
        </section>

        <section id="technologies" className="technologies section-blue">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="header-text-1">Technologies used</h1>
                <hr className="hr-gray" />
              </div>
              <div
                id="technology-icons"
                className="technology-icons text-center"
              ></div>
            </div>
          </div>
        </section>

        <section id="passion-goals">
          <div className="row mt-3">
            <div className="col-7">
              <p className="strong-text">Passion & mission</p>
              <p className="elevator-pitch">
                Driving technological innovation with
                <span className="highlight highlight-yellow"> AI</span> to
                enhance lives and solve complex problems
              </p>
              <hr />
              <p>
                My passion for technology drives me to continuously learn and
                innovate. I am particularly interested in the potential of
                artificial intelligence and how it can be leveraged to create
                smarter, more efficient systems. As I advance in my career, I
                aim to contribute to projects that not only solve complex
                problems but also improve the quality of life for users.
              </p>
            </div>
            <div className="col-5">
              <img src={GoalsImage} style={{ width: "98%", height: "auto" }} />
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

export default Home;
