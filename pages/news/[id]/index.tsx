import Navbar from "@Components/Navbar";
import AppLayout from "@layout/layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
require("./index.less");

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  const [oneData, setOneData]: any = useState({});
  const [data, setData]: any = useState([]);
  const [loading, setLoading]: any = useState(true);
  const [pageLoad, setPageLoad]: any = useState(true);
  const [rng, setRng]: any = useState(Math.random);


  if (pageLoad || loading) {
    // return <Loader></Loader>;
  }

  return (
    <AppLayout>
      <Navbar></Navbar>
    </AppLayout>
  );
};

export default index;
