import React from "react";
import { Link } from "react-router-dom";
import { ImgBody, SombraImg, Parrafoh2 } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVerti";

function Home(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2">
            <HeaderVerti />
          </div>
          <div className="col-10">
            <ImgBody>
              <h1>Hola home</h1>
            </ImgBody>
          </div>
        </div>
      </div>
    </>
  );
}

export { Home };
