import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";


import PageHelmet from "components/common/Helmet";
import Contact from "components/Contact";
import Projects from "components/Projects";
import Services from "components/Services";
import Slide from "components/Slide";
import About from "components/About";

const PortfolioLanding = () => {
  return (
    <div className="active-dark">
      <PageHelmet pageTitle="Portfolio - DinoDev" />
      {/*Slider */}
      <Slide />

      {/*About*/}
      <About />

      {/*Service  */}
      <Services />

      {/*Projects */}
      <Projects />

      {/*Contact */}
      <Contact />      
      
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
