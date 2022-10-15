import Link from "next/link";
import React from "react";

// CSS
require("./index.less");

const index = (props: any) => {
  return (
    <>
      <div
        id="header-menu-container3"
        className="header-menu-container3 full-width navFlex"
      >
        <Link href="/">
          <img src="/images/pAlo.svg" className="cursor" alt="" />
        </Link>
      </div>
    </>
  );
};

export default index;
