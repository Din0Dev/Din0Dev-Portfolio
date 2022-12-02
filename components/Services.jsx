import React from "react";

import ServicesList from "./common/ServicesList";

const Services = () => {
  return (
    <div id="service" className="fix">
      <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                <h2 className="title">Services</h2>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            <div className="col-lg-12">
              <ServicesList
                item="3"
                column="col-lg-4 col-md-6 col-sm-12 col-12 text-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
