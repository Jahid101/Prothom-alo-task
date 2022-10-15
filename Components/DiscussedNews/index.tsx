import { Divider } from "antd";
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
      <div></div>
      {props?.data?.items?.map((item: any, index: any) => {
        return (
          <div key={index}>
            <div className="newsId">{convertToBang(index + 1)}</div>
            <div className="newsHeadLine">
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
            {props?.data?.items?.length - 1 != index && <Divider></Divider>}
          </div>
        );
      })}
    </div>
  );
};

export default index;
