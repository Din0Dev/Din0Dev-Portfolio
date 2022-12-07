import { useTranslation } from "react-i18next";
import TabsSkill from "./common/TabsSkill";

const About = () => {
  const { t } = useTranslation();
  
  let title = `${t("about:title")}`,
    description = `${t("about:description")}`;

  const tabs = [`${t("about:mainskills")}`, `${t("about:education")}`];
  const tabsDescription = [
    {
      field: [
        {
          name: `${t("about:javascriptTitle")}`,
          work: `${t("about:development")}`,
          description: `${t("about:javascript")}`,
        },
        {
          name: `${t("about:reactjsTitle")}`,
          work: `${t("about:development")}`,
          description: `${t("about:reactjs")}`,
        },
        {
          name: `${t("about:vuejsTitle")}`,
          work: `${t("about:development")}`,
          description: `${t("about:vuejs")}`,
        },
        {
          name: `${t("about:wordpressTitle")}`,
          work: `${t("about:development")}`,
          description: `${t("about:wordpress")}`,
        },
        {
          name: `${t("about:figmaTitle")}`,
          work: `${t("about:designer")}`,
          description: `${t("about:figma")}`,
        },
      ],
    },
    {
      field: [
        {
          name: `${t("about:fpolyTitle")}`,
          work: `${t("about:fpolyWork")}`,
          description: `${t("about:fpoly")}`,
        },
        {
          name: `${t("about:udemyTitle")}`,
          work: `${t("about:udemyWork")}`,
          description: `${t("about:udemy")}`,
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
