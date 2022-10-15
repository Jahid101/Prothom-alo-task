import Navbar from "@Components/Navbar";
import AppLayout from "@layout/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "@Data/data.json";
import Loader from "@Components/Loader";
import { Divider } from "antd";

require("./index.less");

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData]: any = useState({});

  useEffect(() => {
    let data: any = localStorage.getItem("news");
    setData(JSON.parse(data));
  }, [router.isReady]);

  if (typeof window !== "undefined") {
    //@ts-ignore
    document.getElementById("details")?.innerHTML += data?.descriptions;
  }

  if (!router.isReady) {
    return <Loader></Loader>;
  }

  return (
    <AppLayout>
      <Navbar></Navbar>
      <div className="detailsContainer">
        {data?.subheadline && <div>{data?.subheadline}</div>}
        {data?.headline && (
          <div className="detailsHeadline">{data?.headline}</div>
        )}

        <Divider></Divider>

        <div className="text-center">
          <img src={data?.thumb} className="newsImg" alt="Photo" />
        </div>

        <div id="details"></div>
      </div>
    </AppLayout>
  );
};

export default index;
