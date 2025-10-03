import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartLists = useSelector((state) => state.cart);
  return (
    <div>
      {cartLists.itemsList &&
        cartLists.itemsList.map((item) => {
          return <h1>{item.title}</h1>;
        })}
    </div>
  );
}

export default Cart;
