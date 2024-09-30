import React from "react";
import logo from "../assets/logo.png";

const Layout = () => {
  return (
    <header>
      <div className="banner">
        <a href="index.html">
          <img src={logo} alt="Kazi Islam" className="logo" />
        </a>
        <div className="banner-text roboto-thin">
          <h1 className="header-text-1">Kazi Islam</h1>
          <p className="occupation">Software Developer | Business Analyst</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
