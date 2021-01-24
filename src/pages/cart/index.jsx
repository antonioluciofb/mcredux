import React from "react";

import { useHistory } from "react-router-dom";

import { connect as Connect } from "react-redux";
import Exclude from "../../store/actions/excludeActions";

import { Container, Button } from "./style";
import ProductModel from "../products/productModel";

function Cart({ cart, excludeProduct }) {
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
      </div>
      <div className="products">
        {cart.map((product, i) => {
          return (
            <ProductModel
              key={product.id}
              src={product.image_url}
              title={product.nome}
              qtn={product.tamanho}
              price={product.valor}
              description={product.description}
              chosen={product.chosen}
              change={() => {
                excludeProduct(product);
              }}
            />
          );
        })}
      </div>
    </Container>
  );
}

function mapStateToProps({ products }) {
  return {
    cart: products.cart,
  };
}

function mapDispachToProps(dispatch) {
  return {
    excludeProduct(product) {
      const action = Exclude.excludeProduct(product);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(Cart);
