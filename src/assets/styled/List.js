import styled from "styled-components";
const color = {
  yellow: "#dfaa46",
  blue: "#a3b5b5",
  orange: "#dd674b",
  greed: "#63886f",
  pink: "#8e645c",
};

const GrupoList = styled.div`
  width: 60%;
  background: ${color.yellow};
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    list-style: none;
  }
  p {
    color: ${color.greed};
    font-size: 20px;
    border-right: 2px solid ${color.yellow};
    height: 1.2em;
    width: 5em;
    margin: 20px;
    &.active {
      color: ${color.yellow};
    }
    &:hover {
      color: ${color.yellow};
    }
  }
  background: ${color.yellow};
`;
export { GrupoList };
