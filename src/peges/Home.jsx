import React from "react";

import { CuerpoBody, SombraImg } from "../assets/styled/ImgFondo";
const avatar = [
  { text: "escucha tu musica favorita", imagen: "mus.jpg" },
  { text: "escucha tu musica favorita", imagen: "mus.jpg" },
  { text: "escucha tu musica favorita", imagen: "mus.jpg" },
];
function Home(props) {
  return (
    <CuerpoBody>
      <SombraImg>
        <h2>este es mi home</h2>
      </SombraImg>
    </CuerpoBody>
  );
}

export { Home };
