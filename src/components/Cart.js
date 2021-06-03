import React, { createContext } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";

export const CartContext = createContext();

const Cart = () => {
  // const [item, setItem] = useState(products);

  return (
    <CartContext.Provider value={products}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
