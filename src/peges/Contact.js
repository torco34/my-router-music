import React from "react";
import { ImgBody, SombraImg, BodyContact } from "../assets/styled/ImgFondo";
import { Form } from "../components/Form";
import { HeaderVerti } from "../components/HeaderVerti";
function Contact(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-2">
            <HeaderVerti />
          </div>
          <div className="col-10">
            <ImgBody>
              <h1>containtos </h1>
            </ImgBody>
          </div>
        </div>
      </div>
    </>
  );
}

export { Contact };
