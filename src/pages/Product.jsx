import React from "react";
import { cartAction } from "./../slice/cartSlice";
import { useDispatch } from "react-redux";

function Product({ id, title, price, image }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = {
      id: id,
      title: title,
      price: price,
    };

    dispatch(cartAction.addInCart(item));
  };

  return (
    <div className="product-card productStyle">
      <div className="productImage">
        <img src={image} alt="" className="productImg" />
      </div>
      <p>{title.slice(0, 23)}...</p>
      <span>{price}</span>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  );
}

export default Product;
