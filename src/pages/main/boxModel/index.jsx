import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./style";

export default function BoxModel({ label, img, href }) {
  const history = useHistory()

  return (
    <div>
      <Container onClick={()=>{history.push(`/${href}`)}}>
        <img src={img} alt="" />
        <h2>{label}</h2>
      </Container>
    </div>
  );
}
