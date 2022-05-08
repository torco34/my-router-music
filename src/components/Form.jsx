import React from "react";
import {
  faTimesCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formulario, Iconos, GroupIcon, Input } from "../assets/styled/Form";
const Form = () => {
  return (
    <>
      <Formulario accion="">
        <GroupIcon>
          <Input type="text" placeholder="Buscar" id="nombre" />
          <Iconos icon={faExclamationTriangle} />
        </GroupIcon>
      </Formulario>
    </>
  );
};

export { Form };
