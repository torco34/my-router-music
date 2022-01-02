import styled from "styled-components";

const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
  red: "#a6756a",
  white: "#ffff",
};

const HeaderPadre = styled.div`
  position: relative;
  height: 100vh;
  width: 15%;
  left: 0px;
  padding-top: 40px;
  z-index: 4;
  background: ${color.orange};
  opacity: 0.7;
`;

export { HeaderPadre };
