import styled from "styled-components";
const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
};

const LogoNew = styled.div`
  background: ${color.blue};
  width: 10%;
  height: 50px;
  padding: 10px;
  border-radius: 3%;
  z-index: 999;
 
  &:hover{
    background: ${color.pink};
    color: ${color.greed};
  }
  
   
  

}

`;
const LogoH1 = styled.h1`
  color: #fff;
  margin: auto;
  margin-left: 10px;
`;
const Span2 = styled.span`
  color: ${color.orange};
  font-size: 25px;

  &:hover {
  }
`;

export { LogoNew, LogoH1, Span2 };
