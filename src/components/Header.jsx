import React from "react";
import { Container } from "../assets/styled/Header";
import { Logo } from "./Logo";
import { List } from "./List";
const Header = () => {
  return (
    <Container>
      <Logo />
      <List />
    </Container>
  );
};

export { Header };
