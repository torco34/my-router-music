import React from "react";

import { Logo } from "../components/Logo";
import { CuerpoBody } from "../assets/styled/Body";
function Home() {
  return (
    <>
      <CuerpoBody>
        <Logo />
      </CuerpoBody>
    </>
  );
}

export { Home };
