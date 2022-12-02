import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import useScrollProgressBar from "hooks/useScrollProgressBar";
import DefaultLayout from "layout/DefaultLayout";
import PageHelmet from "components/common/Helmet";
import Slide from "components/Slide";
import About from "components/About";
import Services from "components/Services";
import Projects from "components/Projects";
import Contact from "components/Contact";

export default function Index() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <div className="active-dark">
        <PageHelmet pageTitle="Portfolio - DinoDev" />
        {/*Slider */}
        <Slide />

        {/*About */}
        <About />

        {/*Service */}
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
    </DefaultLayout>
  );
}
