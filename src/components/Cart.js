import React, { createContext, useReducer } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  return (
    <CartContext.Provider value={{ ...state, removeItem }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
