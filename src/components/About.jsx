{
  /*Developed by: Kazi Islam
ID: 301163646
September 29, 2024
*/
}
import React from "react";
import PassportPic from "../assets/Kazi_PP_Pic.jpg";

const About = () => {
  return (
    <div>
      <div className="container">
        <div style={{ marginLeft: "150px" }}>
          <img
            src={PassportPic}
            style={{ width: "150px", height: "auto" }}
          ></img>
          <h5>Kazi Zahirul Islam</h5>
          <hr></hr>
          <p>
            Self-driven and analytical software developer currently enrolled in
            a Software Engineering Technology program, specializing in
            Artificial Intelligence.
          </p>
        </div>
        <section id="resume">
          <div className="text-right mb-5 mr-1">
            <a
              className="btn btn-sm btn-outline-dark"
              href="assets/Resume_Kazi_Islam_SoftwareDeveloper.pdf"
              target="_blank"
            >
              <i className="fa fa-file"></i> Download Resume
            </a>
          </div>
          <div className="resume-content mt-5">
            <div className="content-left mb-5">
              <h3 className="strong-text text-right">Experience</h3>
              <div>
                <h6 className="strong-text text-right mt-5">
                  Software Developer
                </h6>
                <p className="strong-text text-right job-location">
                  Millenium Freightways Inc. <br />
                  2020 - Date
                </p>
              </div>
              <div style={{ marginTop: "110px !important" }}>
                <h6 className="strong-text text-right">Software Developer</h6>
                <p className="strong-text text-right job-location">
                  Retoll Inc. <br />
                  2018 - 2020
                </p>
              </div>
              <div style={{ marginTop: "65px !important" }}>
                <h6 className="strong-text text-right">Business Analyst</h6>
                <p className="strong-text text-right job-location">
                  Southtech Limited <br />
                  2010 - 2016
                </p>
              </div>
              <h3 className="strong-text text-right mt-5 pt-5">Education</h3>
              <div style={{ marginTop: "40px !important" }}>
                <h6 className="strong-text text-right">
                  Msc. Information Systems
                </h6>
                <p className="strong-text text-right job-location">
                  2005 - 2006
                </p>
              </div>
              <div style={{ marginTop: "40px !important" }}>
                <h6 className="strong-text text-right">
                  Bsc. Information Systems
                </h6>
                <p className="strong-text text-right job-location">
                  2002 - 2004
                </p>
              </div>
            </div>
            <div className="divider">
              <div
                style={{
                  width: 1,
                  height: "100%",
                  backgroundColor: "rgb(0, 0, 0)",
                }}
              ></div>
            </div>
            <div className="content-middle">
              <div style={{ marginTop: "85px" }}>
                <div className="resume-dot"></div>
                <p>
                  Collaborated with stakeholders to design, develop, and
                  maintain web applications using C# .NET, SQL Server, HTML,
                  CSS, and JavaScript, optimized database queries and stored
                  procedures, implemented features to enhance user experience,
                  and ensured reliable performance through troubleshooting and
                  debugging.
                </p>
              </div>
              <div style={{ marginTop: "48px" }}>
                <div className="resume-dot"></div>
                <p>
                  Designed, developed, and maintained responsive web
                  applications using C# .NET, JavaScript, and Bootstrap, while
                  providing technical support and staying updated with industry
                  best practices.
                </p>
              </div>
              <div style={{ marginTop: "48px" }}>
                <div className="resume-dot"></div>
                <p>
                  Collaborated with finance, IT, and end-users to gather and
                  analyze business requirements for financial software
                  solutions, leading requirements gathering, conducting
                  interviews, facilitating workshops, and translating needs into
                  technical specifications and user stories.
                </p>
              </div>
              <div style={{ marginTop: "132px" }}>
                <div className="resume-dot"></div>
                <p>
                  Canadian equivalent master’s degree - assessed by WES (MSc.
                  Information Systems Development, UK)
                </p>
              </div>
              <div style={{ marginTop: "50px" }}>
                <div className="resume-dot"></div>
                <p>
                  Canadian equivalent bachelor's degree - assessed by WES (Bsc.
                  Computing & Information Systems, UK)
                </p>
              </div>
            </div>
            <div className="content-right">
              <h6 className="strong-text mb-3">Technical proficiency</h6>
              <hr />
              <div id="skill-section" className="skill-section"></div>
            </div>
          </div>
        </section>
      </div>
      <button id="btnScrollToTop" className="float-button">
        Top
      </button>
    </div>
  );
};

export default About;
