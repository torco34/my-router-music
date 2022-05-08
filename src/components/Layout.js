import React from "react";
import { ImgBody, SombraImg } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "./HeaderVerti";

const Layout = ({ children }) => {
  return (
    <>
      <div className="col-12  border border-info">
        <HeaderVerti />

        {children}
      </div>
    </>
  );
};
export { Layout };
