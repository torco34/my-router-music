import React from "react";
import {
  faTimesCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BodyForm,
  Formulario,
  Label,
  Iconos,
  GroupIcon,
  Input,
  LeyendoError,
} from "../assets/styled/Form";
const Form = () => {
  return (
    <>
      <BodyForm>
        <Formulario accion="">
          <Label htmlFor="nombre">Usuario</Label>
          <GroupIcon>
            <Input type="text" placeholder="usario" id="nombre" />
            <Iconos icon={faTimesCircle} />
          </GroupIcon>
          <LeyendoError>
            Lorler,felr,gelg frl,glt,5 44l,r34l l 3l4r4r adipisicing elit. Al
          </LeyendoError>
        </Formulario>
        <div>
          <Label>
            <input type="checkbox" name="terminos" id="termino" />
            Acepto termino y condeciones
          </Label>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Erro:</b>Por favor relle el formulario bien
          </p>
        </div>
        <div>
          <button type="submit">Enviar</button>
          <p>Formulari se envio exitosamente</p>
        </div>
      </BodyForm>
    </>
  );
};

export { Form };
