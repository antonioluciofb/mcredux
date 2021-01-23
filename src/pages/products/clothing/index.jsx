import React from "react";

import { useHistory } from "react-router-dom";

import { connect as Connect } from "react-redux";
import Select from "../../../store/actions/selectAction";

import { Container,Button } from "./style";
import ProductModel from "../productModel";

function Products({ clothings, selectProduct }) {
  const history = useHistory();

  return (
    <Container>
      <div className="options">
        <Button
          className="back"
          type="submit"
          onClick={() => {
            history.push("/");
          }}
        >
          Back
        </Button>
        <Button
          className="cart"
          type="submit"
          onClick={() => {
            history.push("/cart");
          }}
        >
          Cart
        </Button>
      </div>
      <div className="products">
        {clothings.map((product, i) => (
          <ProductModel
            key={product.id}
            src={product.image_url}
            title={product.nome}
            qtn={product.tamanho}
            price={product.valor}
            description={product.description}
            chosen={product.chosen}
            change={() => {
              selectProduct(product.id, "CLOTHINGS");
            }}
          />
        ))}
      </div>
    </Container>
  );
}

function mapStateToProps({ products }) {
  return {
    clothings: products.clothings,
  };
}

function mapDispachToProps(dispatch) {
  return {
    selectProduct(product, type) {
      const action = Select.selectProduct(product, type);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(Products);
