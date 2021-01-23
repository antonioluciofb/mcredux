import Products from "../../data";

const initialState = {
  home: Products.home,
  clothings: Products.clothing,
  cart: [],
};

export default function ProductsReducer(
  state = initialState,
  { type, payload }
) {
  if (type === "EXCLUDE_PRODUCTS") {
    const product = state.cart.find((e) => e.id === payload);

    var newCart = state.cart.filter((e) => e.id !== product.id);
    state.cart = newCart;

    state.home.forEach((e) => {
      if (e.id === product.id) {
        e.chosen = !e.chosen;
      }
    });

    return { ...state };
  }

  if (type === "MODIFIED_PRODUCT") {
    if (payload.type === "HOME") {
      const product = state.home.find((e) => e.id === payload.numberProduct);

      state.home.forEach((e) => {
        if (e.id === product.id) {
          e.chosen = !e.chosen;
          if (e.chosen === true) {
            state.cart.push(product);
          } else {
            state.cart = state.cart.filter((e) => e.id !== product.id);
          }
        }
      });
      return { ...state };
    } else if (payload.type === "CLOTHINGS") {
      const product = state.clothings.find(
        (e) => e.id === payload.numberProduct
      );

      state.clothings.forEach((e) => {
        if (e.id === product.id) {
          e.chosen = !e.chosen;
          if (e.chosen === true) {
            state.cart.push(product);
          } else {
            state.cart = state.cart.filter((e) => e.id !== product.id);
          }
        }
      });
      return { ...state };
    }
  } else return { ...state };
}
