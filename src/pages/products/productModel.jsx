import React, { useState } from "react";

import { Container, Model } from "./style";

export default function ProductModel({
  src,
  title,
  qtn,
  price,
  description,
  chosen,
  change,
}) {
  const [chosed, setChosed] = useState(chosen);

  function buttonStyle() {
    if (chosed) return "chosen";
    else return "default";
  }

  function buttonValue() {
    if (chosed) return "Adicionado";
    else return "Adicionar";
  }

  return (
    <Container>
      <Model>
        <img src={src} alt="" />
        <p className="title">
          {title} {qtn.toUpperCase()}
        </p>
        <p className="price">R$ {price},00</p>
        <p className="description">{description}</p>
        <input
          onClick={() => {
            change();
            setChosed(!chosed)
          }}
          className={buttonStyle()}
          type="button"
          value={buttonValue()}
        />
      </Model>
    </Container>
  );
}
