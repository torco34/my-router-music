import styled from "styled-components";
const color = {
  greed: "#63886f",
  gray: "#cccccc",
  white: "#ffff",
};

const LogoNew = styled.div`
  width: 70%;
  height: 40px;
  text-align: center;
  padding: 8px;
  border-radius: 3%;
  z-index: 4;
  text-shadow: 2px 2px 5px ${color.white};
  margin: auto;
  &:hover {
    text-shadow: 2px 2px 5px ${color.gray};
  }
`;
const LogoH1 = styled.h1`
  color: #fff;
  margin: auto;
  font-size: 30px;
`;
const Span2 = styled.span`
  color: ${color.greed};
  font-size: 25px;
`;

export { LogoNew, LogoH1, Span2 };
