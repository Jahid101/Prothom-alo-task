import AdNews from "@Components/AdNews";
import DiscussedNews from "@Components/DiscussedNews";
import LatestNews from "@Components/LatestNews";
import MostReadNews from "@Components/MostReadNews";
import Navbar from "@Components/Navbar";
import SelectedNews from "@Components/SelectedNews";
import data from "@Data/data.json";
import AppLayout from "@layout/layout";
import { Col, Divider, Row, Tabs } from "antd";
import { useState } from "react";
require("./index.less");

const { TabPane } = Tabs;

const index = () => {
  const [key, setKey] = useState("latest");

  const tabsCallback = (key: any) => {
    setKey(key);
  };

  console.log(data);

  return (
    <AppLayout>
      <Navbar></Navbar>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={10} lg={10} xl={6} xxl={6} className="colLeft">
            <Tabs
              onChange={(e) => {
                tabsCallback(e);
              }}
              activeKey={key}
              centered
            >
              <TabPane tab={`সর্বশেষ`} key="latest">
                <LatestNews data={data?.latest}></LatestNews>
              </TabPane>

              <TabPane tab={`পঠিত`} key="mostread">
                <MostReadNews data={data?.mostread}></MostReadNews>
              </TabPane>

              <TabPane tab={`আলোচিত`} key="discussed">
                <DiscussedNews data={data?.discussed}></DiscussedNews>
              </TabPane>
            </Tabs>
          </Col>

          <Col xs={24} sm={24} md={14} lg={14} xl={12} xxl={12}>
            {/* <Row>  */}
            {/* <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}> */}
            <SelectedNews data={data?.selected}></SelectedNews>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <AdNews data={data?.selected}></AdNews>
          </Col>
          {/* </Row>
          </Col> */}
        </Row>

        <Divider></Divider>

        <div className="advDivOuter">
          <div className="advDiv2">AD-2</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default index;
