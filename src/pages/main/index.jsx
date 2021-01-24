import React from "react";

import Header from "./header/header";
import BoxModel from "./boxModel/index";
import "./index.css";

import Blusa from "../../assets/blusa.svg";
import Casa from "../../assets/casa.png";

export default function Main() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="container">
        <div className="content">
          <div className="categories">
            <BoxModel
              href="clothingproducts"
              label="Roupas"
              img={Blusa}
              className="box"
            ></BoxModel>
            <BoxModel
              href="homeproducts"
              label="Casa"
              img={Casa}
              className="box"
            ></BoxModel>
          </div>
        </div>
      </div>
    </>
  );
}
