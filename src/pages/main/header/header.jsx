import React from "react";

import { Container } from "./style";
import Logo from "../../../assets/logo.svg";

export default function Header() {
  return (
    <div>
      <Container>
        <img src={Logo} alt="" />
        <h1>Meninas Clean</h1>
      </Container>
    </div>
  );
}
