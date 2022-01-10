import React from "react";
import { ImgBody, SombraImg } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "./HeaderVerti";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <ImgBody>
        <HeaderVerti />
        <SombraImg>
          <p>Layout</p>
        </SombraImg>
      </ImgBody>
    </>
  );
};
export { Layout };
