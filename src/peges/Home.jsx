import React from "react";
import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { CuerpoBody, SombraImg } from "../assets/styled/Body";
function Home() {
  return (
    <>
      <CuerpoBody>
        <Header />
        <Item />
        <h2 className="text-center">SONIDOS DEL VIENTO</h2>
      </CuerpoBody>
    </>
  );
}

export { Home };
