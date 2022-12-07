import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabsSkill = (props) => {
  const { t } = useTranslation();

  const {
    tabStyle,
    tab1 = `${t('about:mainskills')}`,
    tab2 = `${t('about:education')}`,
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
                          <b>{t('about:javascriptTitle')}</b>
                          <span> - {t('about:development')}</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <b>{t('about:reactjsTitle')}</b> <span> - {t('about:development')}</span>
                        </div>
                        {t('about:reactjs')}
                      </li>
                      <li>
                        <div>
                          <b>{t('about:vuejsTitle')}</b> <span> - {t('about:development')}</span>
                        </div>
                        {t('about:vuejs')}
                      </li>
                      <li>
                        <div>
                          <b>{t('about:wordpressTitle')}</b> <span> - {t('about:development')}</span>
                        </div>
                        {t('about:wordpress')}
                      </li>
                      <li>
                        <div>
                          <b>{t('about:figmaTitle')}</b>{" "}
                          <span> - {t('about:designer')}</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <b>{t('about:other')}</b>
                        </div>
                        {t('about:otherDesc1')}
                        <br></br>
                        {t('about:otherDesc2')}
                        <br></br>
                        {t('about:otherDesc3')}                      </li>
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
