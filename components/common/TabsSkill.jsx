import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabsSkill = (props) => {
  const {
    tabStyle,
    tab1 = "Main skills",
    tab2 = "Education & Certification",
  } = props;
  //! Render
  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  <Tab>{tab2}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <div>
                          <b>Javascript, HTML, CSS</b>{" "}
                          <span> - Development</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <b>React JS</b> <span> - Development</span>
                        </div>
                        Expert in ReactJS, Hook, Redux, Redux-Saga, NextJS,...
                      </li>
                      <li>
                        <div>
                          <b>Vue Js</b> <span> - Development</span>
                        </div>
                        Expert in VueJS,Nuxt, Vuex
                      </li>
                      <li>
                        <div>
                          <b>Wordpress</b> <span> - Development</span>
                        </div>
                        Expert build Website with Wordpress
                      </li>
                      <li>
                        <div>
                          <b>Figma, Adobe Photoshop®, Adobe Illustrator®</b>{" "}
                          <span> - Designer</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <b>Other</b>
                        </div>
                        Experience in SCSS, Styled Components, Animation,...{" "}
                        <br></br>
                        Responsible for work, problem solving, team-spirit, able
                        to work under pressure, Hard worker, enthusiastic.
                        <br></br>
                        Quick to learn new technologies
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <div>
                          <b>FPT Polytechnic School</b>
                          <span> - Ha Noi, Viet Nam</span>
                        </div>
                        Developing Website
                      </li>
                      <li>
                        <div>
                          <b>Udemy, Inc.</b>
                        </div>
                        Next.js & React
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  );
};

export default TabsSkill;
