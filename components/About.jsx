import TabsSkill from "./common/TabsSkill";

let title = "About Me",
  description =
    "I've more 3 years experience in Web Development. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.";
const About = () => {
  const tabs = ["Main skills", "Education & Certification"];
  const tabsDescription = [
    {
      field: [
        {
          name: "Javascript, HTML, CSS",
          work: "Development",
          description: "",
        },
        {
          name: "React JS",
          work: "Development",
          description: "Expert in ReactJS, Hook, Redux, Redux-Saga, NextJS,...",
        },
        {
          name: "Vue Js",
          work: "Development",
          description: "Expert in VueJS,Nuxt, Vuex",
        },
        {
          name: "Wordpress",
          work: "Development",
          description: "Expert build Website with Wordpress",
        },
        {
          name: "Figma, Adobe Photoshop®, Adobe Illustrator®",
          work: "Designer",
          description: "",
        },
      ],
    },
    {
      field: [
        {
          name: "FPT Polytechnic School",
          work: "Ha Noi, Viet Nam",
          description: "Developing Website",
        },
        {
          name: "Udemy, Inc.",
          work: "International",
          description: "Next.js & React",
        },
      ],
    },
  ];
  //! Render
  return (
    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <div>
                      <div className="row row--35 align-items-center">
                        <div className="col-md-3">
                          <div className="thumbnail">
                            <img
                              className="w-100"
                              src="/assets/images/about/avatar.jpg"
                              alt="About Images"
                            />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <p className="description">{description}</p>
                        </div>
                      </div>

                      <div className="row mt--30">
                        <TabsSkill
                          tabStyle="tab-style--1"
                          tabs={tabs}
                          tabsDescription={tabsDescription}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
