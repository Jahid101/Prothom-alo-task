import { Col, Divider, Row } from "antd";
import { convertToBang } from "Helper/helpers";
import router from "next/router";
import React from "react";
require("./index.less");

const index = (props: any) => {
  console.log("discussed", props.data);
  props?.data?.items?.sort(function (a: any, b: any) {
    return a.sort - b.sort;
  });

  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={10} lg={10} xl={24} xxl={24}>
          <div className="titleDiv2">
            <div className="title"> বিজ্ঞাপন</div>
          </div>

          <div className="advDiv">AD-1</div>

          <Divider></Divider>
        </Col>

        <Col xs={24} sm={24} md={14} lg={14} xl={24} xxl={24}>
          <div>
            {props?.data?.items?.map((item: any, index: any) => {
              return (
                <div className="flex">
                  {index > 2 && (
                    <Row>
                      <Col span={14}>
                        <div className="newsAdHeadLine mb-5">
                          <span
                            className="primary-color cursor"
                            onClick={() => {
                              router.push(`/news/${item.id}`);
                              localStorage.setItem(
                                "news",
                                JSON.stringify(item)
                              );
                            }}
                          >
                            {convertToBang(index + 1)}&nbsp;
                            {item?.headline}
                          </span>
                          {item?.subheadline && (
                            <span
                              className="cursor"
                              onClick={() => {
                                router.push(`/news/${item.id}`);
                                localStorage.setItem(
                                  "news",
                                  JSON.stringify(item)
                                );
                              }}
                            >
                              &nbsp;/ {item?.subheadline}
                            </span>
                          )}
                        </div>
                      </Col>

                      <Col span={10}>
                        <div>
                          <img
                            onClick={() => {
                              router.push(`/news/${item.id}`);
                              localStorage.setItem(
                                "news",
                                JSON.stringify(item)
                              );
                            }}
                            src={item.thumb}
                            className="adNewsImg"
                            alt=""
                          />
                        </div>
                      </Col>
                      {props?.data?.items?.length - 1 != index && (
                        <Divider></Divider>
                      )}
                    </Row>
                  )}
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default index;
