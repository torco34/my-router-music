import React from "react";
import { ItemPadre, ItemHijo, Sombr } from "../assets/styled/Item";
function Item() {
  return (
    <>
      <ItemPadre>
        <ItemHijo>
          <p>hola mundo</p>
        </ItemHijo>
        <Sombr>
          {" "}
          <p>hola mundo</p>
        </Sombr>
      </ItemPadre>
    </>
  );
}

export { Item };
