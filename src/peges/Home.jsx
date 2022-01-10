import React from "react";
import { Link } from "react-router-dom";
import { ImgFondo } from "../components/ImgFondo";
import { ImgBody, SombraImg, Parrafoh2 } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVerti";

function Home(props) {
  return (
    <>
      <ImgBody>
        <HeaderVerti />
        <SombraImg>
          <Parrafoh2>
            <Link to="/contact">
              <p className=" btn btn-danger">Iniciar Section</p>
            </Link>
          </Parrafoh2>
        </SombraImg>
      </ImgBody>
    </>
  );
}

export { Home };
