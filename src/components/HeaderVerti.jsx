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
            <p className="active">Inicio</p>
            <Iconos icon={faHouseUser} />
          </Link>
        </div>
        <div>
          <Link to="/interviews">
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

        <div>
          <Link to="/Contact">
            <p>Tu biblioteca</p>
            <Iconos icon={faBook} />
          </Link>
        </div>

        <div>
          <Link to="/podcast">
            <SignMore>+</SignMore>
            <p>Crear lista</p>
          </Link>
        </div>
        <br></br>
        <div>
          <Link to="/podcast">
            <h6>Cancion que te gusta</h6>
          </Link>
        </div>

        <LineEnd></LineEnd>
      </HeaderPadre>
    </>
  );
}

export { HeaderVerti };
