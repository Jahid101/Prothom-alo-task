import Navbar from "@Components/Navbar";
import data from "@Data/data.json";
import AppLayout from "@layout/layout";
import { useState } from "react";
require("./index.less");

const index = () => {
  const [visible, setVisible] = useState(false);

  console.log(data);

  return (
    <AppLayout>
      <Navbar></Navbar>
    </AppLayout>
  );
};

export default index;
