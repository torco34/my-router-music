import styled from "styled-components";

const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
  red: "#a6756a",
};

const ItemPadre = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 10px;
  margin-top: 20rem;
`;
const ItemHijo = styled.div`
  // position: relative;
  color: #fff;
  min-height: 50vh;
  background: ${color.greed};
  opacity: 0.8;
  width: 20%;
`;
const Sombr = styled.div`
  width: 20%;
  min-height: 50vh;
  background: ${color.orange};
  opacity: 0.8;
`;

export { ItemPadre, ItemHijo, Sombr };
