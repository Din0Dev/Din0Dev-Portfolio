import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my Portfolio",
  }
];

const Slide = () => {
  return (
    <div id="home" className="fix">
      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
            key={index}
          >
            <Particles
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
              }}
              params={{
                particles: {
                  number: {
                    value: 170,
                    density: {
                      enable: false,
                    },
                  },
                  size: {
                    value: 2,
                    random: true,
                    anim: {
                      speed: 4,
                      size_min: 0.3,
                    },
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    random: true,
                    speed: 0.5,
                    direction: "top",
                    out_mode: "out",
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble",
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                  modes: {
                    bubble: {
                      distance: 250,
                      duration: 2,
                      size: 0,
                      opacity: 0,
                    },
                    repulse: {
                      distance: 400,
                      duration: 4,
                    },
                  },
                },
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className="title">
                      Hi, I’m Hong Hai (Din0Dev) <br />
                      <TextLoop>
                        <span> Web Developer.</span>
                        <span> Designer.</span>
                      </TextLoop>
                    </h1>
                    <h2>Based in Viet Nam.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>
    </div>
  );
};

export default Slide;
