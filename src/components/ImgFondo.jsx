import React from "react";
import { Link } from "react-router-dom";
import { ImgBody, SombraImg } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "./HeaderVerti";
import { Home } from "../peges/Home";
function ImgFondo(props) {
  return (
    <>
      <ImgBody>
        <SombraImg>
          <HeaderVerti />
        </SombraImg>
      </ImgBody>
    </>
  );
}

export { ImgFondo };
