import React from 'react';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { cartAction } from './../slice/cartSlice';

function CartElement({ title, price, quantity, totalPrice, id }) {
  const dispatch = useDispatch();
  const IncrementCartElement = () => {
    const ItemstoSend = {
      id: id,
      title: title,
      price: price,
    };
    dispatch(cartAction.addInCart(ItemstoSend));
  };

  const RemoveElement = (id) => {
    dispatch(cartAction.removeFromCart(id));
  };
  return (
    <div className="cart-element">
      <h3>{title}</h3>
      <p>{price}</p>
      <p className="quantity">{quantity}</p>
      <p>{totalPrice}</p>
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={() => IncrementCartElement()}>
          +
        </button>
        <button className="quantity-btn" onClick={() => RemoveElement(id)}>
          -
        </button>
      </div>
    </div>
  );
}

export default CartElement;
