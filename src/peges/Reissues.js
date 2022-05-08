import React from "react";

import { ImgBody, SombraImg, Parrafoh2 } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVerti";
function Reissues(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2">
            <HeaderVerti />
          </div>
          <div className="col-10">
            <ImgBody>
              <h1>biblioteca</h1>
            </ImgBody>
          </div>
        </div>
      </div>
    </>
  );
}

export { Reissues };
