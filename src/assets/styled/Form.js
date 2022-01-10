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
const BodyForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background: ${color.greed};
  width: 50%;
  height: 80vh;
  padding: 20px;
  color: ${color.light};
  @media (max-width) {
    grid-template-columns: 1fr;
  }
`;
const Label = styled.label`
  display: block;
  padding: 10px;
  min-height: 40px;
  font-weight: 700;
  cusor: pointer;
`;
const GroupIcon = styled.div`
  position: relative;
  z-index: 90;
`;
const Input = styled.input`
  width: 80%;
  background: #fff;
  border-radius: 4px;
  color: #fff;
  height: 45px;
  line-height: 45;
  padding: 0 40px 0px 10px;
  transition: 0.3s ense all;
  border: 4px solid transparent;
  &:focus {
    border: 4px solid ${color.orange};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163 163 163 0.4);
  }
`;
const LeyendoError = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: ${color.light};
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
const Formulario = styled.div``;
export { BodyForm, Label, Iconos, GroupIcon, Input, Formulario, LeyendoError };
