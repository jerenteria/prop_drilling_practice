import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/shopping-cart-context";

function App() {
  return (
    // import cartcontext here bc most components in app.jsx will need access to arr of items in cart
    // need value prop even though we already set a default value in shopping-cart-context.jsx
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
