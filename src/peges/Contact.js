import React from "react";
import { ImgBody, SombraImg, BodyContact } from "../assets/styled/ImgFondo";
import { Form } from "../components/Form";
import { HeaderVerti } from "../components/HeaderVerti";
function Contact(props) {
  return (
    <>
      <ImgBody>
        <HeaderVerti />
        <SombraImg>
          <BodyContact>
            <Form />
          </BodyContact>
        </SombraImg>
      </ImgBody>
    </>
  );
}

export { Contact };
