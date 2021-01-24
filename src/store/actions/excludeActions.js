const excludeAction = "EXCLUDE_PRODUCTS"

function excludeProduct(product) {
  return {
    type: excludeAction,
    payload: product,
  };
}

const Exclude = { excludeProduct };

export default Exclude;
