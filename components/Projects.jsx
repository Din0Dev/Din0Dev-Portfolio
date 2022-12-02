import ProjectsList from "./common/ProjectsList";

const Projects = () => {
  return (
    <div id="project" className="fix">
      <div className="portfolio-area ptb--120 bg_color--1">
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Latest Projects</h2>
                  <p>Here are a few projects I've worked on recently.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <ProjectsList
                styevariation="text-center mt--40"
                column="col-lg-4 col-md-6 col-sm-12 col-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
