import Navbar from "@Components/Navbar";
import AppLayout from "@layout/layout";
import { useState } from "react";
require("./index.less");

const index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <AppLayout>
      <Navbar></Navbar>
    </AppLayout>
  );
};

export default index;

