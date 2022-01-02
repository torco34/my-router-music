import styled from "styled-components";
const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
  light: "#ffffff",
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${color.light};
  width: 100%;
  height: 8vh;
  padding: 15px 4px 7px 50px;
  // position: relative;
  // z-index: 4;
`;
export { Container };
