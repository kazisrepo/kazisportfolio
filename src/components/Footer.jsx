{
  /*Developed by: Kazi Islam
ID: 301163646
September 29, 2024
*/
}
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <section id="get-in-touch" className="section-gray">
          <div className="row">
            <div className="col-12">
              <p>
                Thank you for visiting my portfolio. I invite you to explore my
                works and see the projects that reflect my skills and
                dedication. Feel free to connect with me on GitHub and LinkedIn,
                or reach out via email for any inquiries or collaborations.
                <span className="strong-text">
                  Let's create something amazing together!
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="row bottom-nav mt-5">
            <div className="col-8">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kzislam/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square pr-2"></i>LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kazisrepo" target="_blank">
                    <i className="fa fa-github pr-2"></i>GitHub
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="fa fa-envelope-o pr-2"></i>Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 text-right">
              <a href="/credits">
                <i className="fa fa-thumbs-o-up pr-2"></i>Credits and
                acknowledgements
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <hr className="hr-gray" />
        <p>&copy; 2024 Kazi Islam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
