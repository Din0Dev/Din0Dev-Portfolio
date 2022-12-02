import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import { SiSkype } from "react-icons/si";
import Scrollspy from "react-scrollspy";
const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/honghai.2501" },
  { Social: <FaGithub />, link: "https://github.com/Din0Dev" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/d1n0dev/" },
  {
    Social: <SiSkype />,
    link: "https://join.skype.com/invite/uYtR6XqaUgNe",
  },
];

let logoUrl = (
  <img
    style={{ width: "30px", opacity: 0.8 }}
    src="/assets/images/logo/logo.svg"
    alt="Digital Agency"
  />
);

const Header = (props) => {
  const { color = "color-black", logo = "symbol-dark" } = props;

  //! State
  const [isMenuChange, setIsMenuChanged] = useState(false);
  //! Function

  //! Render
  if (typeof window !== "undefined" || typeof document !== "undefined") {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });
  }

  if (typeof window !== "undefined" || typeof document !== "undefined") {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  }

  return (
    <div className="active-dark">
      <header
        className={`header-area header-style-two header--fixed color-black`}
      >
        <div className={`header-wrapper${isMenuChange ? " menu-open" : ""}`}>
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <Link href={"/"}>{logoUrl}</Link>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={["home", "about", "service", "project", "contact"]}
                currentClassName="is-current"
                offset={-200}
              >
                <li
                  onClick={() => {
                    setIsMenuChanged(false);
                  }}
                >
                  <Link href="#home">Home</Link>
                </li>
                <li
                  onClick={() => {
                    setIsMenuChanged(false);
                  }}
                >
                  <Link href="#about">About</Link>
                </li>
                <li
                  onClick={() => {
                    setIsMenuChanged(false);
                  }}
                >
                  <Link href="#service">Service</Link>
                </li>
                <li
                  onClick={() => {
                    setIsMenuChanged(false);
                  }}
                >
                  <Link href="#project">Projects</Link>
                </li>
                <li
                  onClick={() => {
                    setIsMenuChanged(false);
                  }}
                >
                  <Link href="#contact">Contact</Link>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`} target="_blank">
                      {val.Social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={() => {
                  setIsMenuChanged(!isMenuChange);
                }}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span
                onClick={() => {
                  setIsMenuChanged(!isMenuChange);
                }}
                className="closeTrigger"
              >
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
