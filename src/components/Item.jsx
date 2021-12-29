import React from "react";
import { ItemPadre, ItemHijo, Sombr } from "../assets/styled/Item";
function Item(props) {
  return (
    <>
      <div className="image">
        <img src={"img/" + props.image} width="100%" />
      </div>
      <div className="title">{props.text}</div>
    </>
  );
}

export { Item };
