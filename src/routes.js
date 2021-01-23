import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main/index";
import clothingProducts from "./pages/products/clothing/index";
import homeProducts from "./pages/products/home/index";
import Cart from "./pages/cart/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/clothingproducts" component={clothingProducts} />
      <Route path="/homeproducts" component={homeProducts} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
