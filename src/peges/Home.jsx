import React from "react";
import { Link } from "react-router-dom";
import { CuerpoBody, SombraImg, Parrafoh2 } from "../assets/styled/ImgFondo";
import { HeaderVerti } from "../components/HeaderVirti";

function Home(props) {
  return (
    <CuerpoBody>
      <HeaderVerti />
      <SombraImg>
        <Parrafoh2>
          <Link to="/">
            <p className=" btn btn-danger">Iniciar Section</p>
          </Link>
        </Parrafoh2>
      </SombraImg>
    </CuerpoBody>
  );
}

export { Home };
