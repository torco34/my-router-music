import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faSearch,
  faBook,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { HeaderPadre, Iconos } from "../assets/styled/HeaderVerti";
import { Logo } from "./Logo";

function HeaderVerti(props) {
  return (
    <>
      <HeaderPadre>
        <Logo />
        <br />
        <br />
        <div>
          <p>Inicio</p>
          <Iconos icon={faHouseUser} />
        </div>
        <div>
          <p>Buscar</p>
          <Iconos icon={faSearch} />
        </div>
        <div>
          <p>Tu biblioteca</p>
          <Iconos icon={faBook} />
        </div>
        <br />
        <br></br>
        <div>
          <p>Crear lista</p>
          <span>+</span>
        </div>
        <div>
          <p>Cancion que te gusta</p>
          <Iconos icon={faHeart} />
        </div>
      </HeaderPadre>
    </>
  );
}

export { HeaderVerti };
