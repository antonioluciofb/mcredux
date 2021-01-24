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
    const { section } = payload;

    if (section === "HOME") {
      const product = state.cart.find((e) => e.id === payload.id);

      state.cart = state.cart.filter((e) => e.id !== product.id);

      state.home.forEach((e) => {
        if (e.id === product.id) {
          e.chosen = !e.chosen;
        }
      });

      return { ...state };
    }
    if (section === "CLOTHING") {
      const product = state.cart.find((e) => e.id === payload.id);

      state.cart = state.cart.filter((e) => e.id !== product.id);

      state.clothings.forEach((e) => {
        if (e.id === product.id) {
          e.chosen = !e.chosen;
        }
      });

      return { ...state };
    }
  }

  if (type === "MODIFIED_PRODUCT") {
    const { section } = payload;

    if (section === "HOME") {
      const product = state.home.find((e) => e.id === payload.id);

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
    } else if (section === "CLOTHING") {
      const product = state.clothings.find((e) => e.id === payload.id);

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
    } else {
      return { ...state };
    }
  } else return { ...state };
}
