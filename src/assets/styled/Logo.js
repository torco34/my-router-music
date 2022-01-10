import styled from "styled-components";
const color = {
  greed: "#63886f",
  gray: "#cccccc",
  white: "#ffff",
  pink: "#8e645c",
  yellow: "#dfaa46",
};

const LogoNew = styled.div`
  width: 70%;
  height: 40px;
  text-align: center;
  padding: 8px;
  border-radius: 3%;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 4;
  text-shadow: 2px 2px 5px ${color.yellow};
  margin: auto;
  &:hover {
    text-shadow: 2px 2px 5px ${color.pink};
  }
`;
const LogoH1 = styled.h1`
  color: ${color.pink};
  margin: auto;
  font-size: 33px;
`;
const Span2 = styled.span`
  color: ${color.greed};
  font-size: 25px;
`;

export { LogoNew, LogoH1, Span2 };
