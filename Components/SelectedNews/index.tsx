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
      <div className="flex titleDiv">
        <div className="blueDot"></div>
        <div className="title"> নির্বাচিত</div>
      </div>

      <div>
        <Row>
          {props?.data?.items?.map((item: any, index: any) => {
            return (
              <Col span={12} className="mt-10">
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
                    {item?.headline}
                  </span>
                  {item?.subheadline && (
                    <span
                      className="cursor"
                      onClick={() => {
                        router.push(`/news/${item.id}`);
                        localStorage.setItem("news", JSON.stringify(item));
                      }}
                    >
                      &nbsp;/ {item?.subheadline}
                    </span>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default index;
