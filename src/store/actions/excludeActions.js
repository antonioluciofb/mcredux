const excludeAction = "EXCLUDE_PRODUCTS"

function excludeProduct(numberProduct) {
  return {
    type: excludeAction,
    payload: numberProduct,
  };
}

const Exclude = { excludeProduct };

export default Exclude;
