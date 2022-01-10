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
  // position: absolute;

  // margin: 10px 20px 30px 50px:
  z-index: 1;
`;
const SombraImg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(${color.yellow}, ${color.yellow});
  opacity: 0.6;
`;

const Parrafoh2 = styled.h2`
  display: flex;
  justify-content: end;
  margin-right: 10px;
  fon-size: 10px;
  margin-top: 20px;

  p {
    border: solid 1px ${color.white};
    margin-right: 10px;
    color: ;

    padding: 10px;
    font-size: 20px;
    margin-top: 20px;
    opacity: 0.6;
  }
`;

export { ImgBody, SombraImg, Parrafoh2 };
