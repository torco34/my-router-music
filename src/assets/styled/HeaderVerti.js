import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  cursor: pointer;
  padding: 30px;
  z-index: 4;
  background: ${color.orange};
  opacity: 0.7;

  p {
    position: relative;
    color: #fff;
    left: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Iconos = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 20px;
  color: #fff;
  margin: 10px;
  margin-top: -40px;
  z-index: 100px;
`;

export { HeaderPadre, Iconos };
