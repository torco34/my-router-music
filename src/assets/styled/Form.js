import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
  light: "#ffffff",
  red: "#a6756a",
};

const GroupIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // border: solid 2px red;
`;
const Input = styled.input`
  width: 30%;
  background: #fff;
  border-radius: 4px;
  color: #000;
  // margin-top: 60px;
  height: 45px;
  line-height: 45;
  padding: 0 40px 0px 10px;
  transition: 0.3s ense all;
  border: 4px solid transparent;
  &:focus {
    outline: none;
    border-radius: 4px;
    height: 45px;
    border: 4px solid transparent;
    box-shadow: 3px 0px 30px rgba(163 163 163 0.4);
  }
`;

const Iconos = styled(FontAwesomeIcon)`
  position: absolute;
  right: 100px;
  bottom: 14px;
  z-index: 100;
  font-size: 18px;
  color: ${color.orange};
  display: none;
`;
const Formulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.orange};
  height: 100px;
`;
export { Iconos, GroupIcon, Input, Formulario };
