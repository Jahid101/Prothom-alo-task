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
    <div style={{ paddingRight: "10px" }}>
      <div className="advColMob">
        <Divider></Divider>

        <div className="titleDiv2">
          <div className="title"> বিজ্ঞাপন</div>
        </div>

        <div className="advDiv">AD-1</div>

        <Divider></Divider>
      </div>

      <div className="flex titleDiv">
        <div className="blueDot"></div>
        <div className="title"> নির্বাচিত</div>
      </div>

      <div>
        <div>
          <Row>
            {props?.data?.items?.map((item: any, index: any) => {
              return (
                <>
                  {index == 0 && (
                    <Col span={24} className="mt-10">
                      <div>
                        <img
                          onClick={() => {
                            router.push(`/news/${item.id}`);
                            localStorage.setItem("news", JSON.stringify(item));
                          }}
                          src={item.thumb}
                          className="selectedNewsImg"
                          alt=""
                        />
                      </div>

                      <div className="newsSelectHeadLine1 mb-5 changPosition">
                        <span
                          className="cursor"
                          onClick={() => {
                            router.push(`/news/${item.id}`);
                            localStorage.setItem("news", JSON.stringify(item));
                          }}
                        >
                          {convertToBang(index + 1)}&nbsp;
                          {item?.headline}
                          {item?.subheadline && <span>&nbsp;/ &nbsp;</span>}
                        </span>
                        <span
                          className="cursor"
                          onClick={() => {
                            router.push(`/news/${item.id}`);
                            localStorage.setItem("news", JSON.stringify(item));
                          }}
                        >
                          {item?.subheadline}
                        </span>
                      </div>
                    </Col>
                  )}

                  {index > 0 && index < 3 && (
                    <Col
                      span={12}
                      className={index == 1 ? "mt-10 midColSelect" : "mt-10"}
                    >
                      <div>
                        <img
                          onClick={() => {
                            router.push(`/news/${item.id}`);
                            localStorage.setItem("news", JSON.stringify(item));
                          }}
                          src={item.thumb}
                          className="selectedNewsImg"
                          alt=""
                        />
                      </div>

                      <div className="newsSelectHeadLine mb-5">
                        <span
                          className="primary-color cursor"
                          onClick={() => {
                            router.push(`/news/${item.id}`);
                            localStorage.setItem("news", JSON.stringify(item));
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
                  )}
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default index;
