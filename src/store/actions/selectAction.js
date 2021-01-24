const selectAction = "MODIFIED_PRODUCT"

function selectProduct(product) {
  return {
    type: selectAction,
    payload: product,
  };
}

const Select = { selectProduct };

export default Select;
