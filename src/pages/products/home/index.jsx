import React from "react";

import { useHistory } from "react-router-dom";

import { connect as Connect } from "react-redux";
import Select from "../../../store/actions/selectAction";

import { Container, Button } from "./style";
import ProductModel from "../productModel";

function Products({ home, selectProduct }) {
  const history = useHistory();

  return (
    <Container>
      <div className="options">
        <Button
          className="back"
          type="submit"
          onClick={() => {
            history.goBack()
          }}
        >Back</Button>
        <Button
          className="cart"
          type="submit"
          onClick={() => {
            history.push("/cart");
          }}
        >Cart</Button>
      </div>
      <div className="products">
        {home.map((product) => {
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
                selectProduct(product);
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
    home: products.home,
  };
}

function mapDispachToProps(dispatch) {
  return {
    selectProduct(product) {
      const action = Select.selectProduct(product);
      dispatch(action);
    },
  };
}

export default Connect(mapStateToProps, mapDispachToProps)(Products);
