{
  /*Developed by: Kazi Islam
ID: 301163646
September 29, 2024
*/
}
import React from "react";
import ServiceImage from "../assets/services.jpeg";
import WebAppImage from "../assets/web-dev.jpeg";
import ProgrammingImage from "../assets/programming.jpeg";
import MobileAppImage from "../assets/mobile-apps.jpeg";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <div className="container">
        <section id="services">
          <div className="row">
            <div className="col-4">
              <img
                src={ServiceImage}
                className=""
                style={{ borderRadius: 10 }}
              />
            </div>
            <div className="col-8">
              <p className="strong-text mb-5">Services I provide </p>
              <p className="elevator-pitch">
                I am currently studying in Software Engineering Technology. I am
                capable of providing followign services at this moment.
              </p>
              <hr />

              <div className="row">
                <div className="col-2">
                  <img
                    src={WebAppImage}
                    className=""
                    style={{ width: "100px", height: "auto", borderRadius: 5 }}
                  ></img>
                </div>
                <div className="col-10">
                  <h4>Web Development</h4>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-2">
                  <img
                    src={ProgrammingImage}
                    className=""
                    style={{ width: "100px", height: "auto", borderRadius: 5 }}
                  ></img>
                </div>
                <div className="col-10">
                  <h4>Application Development (C#, Java) </h4>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-2">
                  <img
                    src={MobileAppImage}
                    className=""
                    style={{ width: "100px", height: "auto", borderRadius: 5 }}
                  ></img>
                </div>
                <div className="col-10">
                  <h4>Mobile App Development</h4>
                </div>
              </div>
              <hr></hr>
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

export default Services;
