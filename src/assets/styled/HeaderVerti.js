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
  background: ${color.white};
  opacity: 0.7;
  a {
    text-decoration: none;
  }

  p {
    position: relative;
    color: ${color.orange};
    left: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Iconos = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 20px;
  color: ${color.orange};
  margin: 10px;
  margin-top: -40px;
  z-index: 100px;
`;
const SignMore = styled.span`
  position: absolute;
  font-size: 16px;
  color: ${color.white};
  text-align: center;
  margin: 10px;
  top: 30%;
  width: 20px;
  height: 23px;
  background: ${color.orange};
  border-radius: 3px;
`;
const LineEnd = styled.div`
  border-bottom: 4px solid ${color.orange};
  background-color: lightgrey;
`;

export { HeaderPadre, Iconos, SignMore, LineEnd };
