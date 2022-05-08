import styled from "styled-components";
const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
  white: "#ffff",
};
const ImgBody = styled.div`
  background-image: url("../img/mus.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  z-index: 6;
  opacity: 0.5;
  width: 100%;
  // top: -100%;
  // margin-left: 10%;
`;
const SombraImg = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 20px;
  background: linear-gradient(${color.yellow}, ${color.yellow});
  opacity: 0.6;
  right: 0;
`;

const Parrafoh2 = styled.h2`
  display: flex;
  justify-content: end;
  margin-right: 10px;
  fon-size: 10px;
  color: #fff;
  width: 50%;
  position: relative;
  right: 0;

  border: solid 2px #000;

  p {
    position: absolute;
    border: solid 1px ${color.white};
    // margin-right: 10px;
    color: ;
    padding: 10px;
    font-size: 20px;
    margin-top: 20px;
    // opacity: 0.6;
  }
`;
const BodyContact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export { ImgBody, SombraImg, Parrafoh2, BodyContact };
