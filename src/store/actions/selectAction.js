const selectAction = "MODIFIED_PRODUCT"

function selectProduct(numberProduct,type) {
  return {
    type: selectAction,
    payload: {numberProduct,type},
  };
}

const Select = { selectProduct };

export default Select;
