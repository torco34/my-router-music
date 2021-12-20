import styled from "styled-components";
const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
};
const CuerpoBody = styled.div`
  background-image: url("../img/mus.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  margin-top: -10px;
`;
const SombraImg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  // top: -10px;
  left: 10px;
  background: linear-gradient(${color.yellow}, ${color.yellow});
  opacity: 0.3;

  h2 {
    color: #000;
    z-index: 999;
    position: relative;
    left: 20em;
  }
`;
export { CuerpoBody, SombraImg };
