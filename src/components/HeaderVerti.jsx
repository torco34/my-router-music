import React from "react";
import { Link } from "react-router-dom";
import {
  faHouseUser,
  faSearch,
  faBook,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  HeaderPadre,
  Iconos,
  SignMore,
  LineEnd,
} from "../assets/styled/HeaderVerti";
import { Logo } from "./Logo";

function HeaderVerti(props) {
  return (
    <>
      <HeaderPadre>
        <Logo />
        <br />
        <br />
        <div>
          <Link to="/">
            <p>Inicio</p>
            <Iconos icon={faHouseUser} />
          </Link>
        </div>
        <div>
          <Link to="/reviews">
            <p>Buscar</p>
            <Iconos icon={faSearch} />
          </Link>
        </div>
        <div>
          <Link to="/Reissues">
            <p>Tu biblioteca</p>
            <Iconos icon={faBook} />
          </Link>
        </div>
        <br />
        <br></br>
        <div>
          <Link to="/Reissues">
            <p>Crear lista</p>
            <SignMore>+</SignMore>
          </Link>
        </div>
        <br />
        <div>
          <p>Cancion que te gusta</p>

          <Iconos icon={faHeart} />
        </div>

        <LineEnd></LineEnd>
      </HeaderPadre>
    </>
  );
}

export { HeaderVerti };
