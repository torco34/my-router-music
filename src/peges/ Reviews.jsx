import React from "react";
import { ImgFondo } from "../components/ImgFondo";
import Avatar from "../assets/img/descarga.jpeg";
import { CuerpoBody, SombraImg } from "../assets/styled/ImgFondo";
const Reviews = (props) => {
  return (
    <>
      <CuerpoBody>
        <SombraImg>
          <img src={Avatar} />
        </SombraImg>
      </CuerpoBody>
    </>
  );
};
export { Reviews };
