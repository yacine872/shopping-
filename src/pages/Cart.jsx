import React from 'react';
import { useSelector } from 'react-redux';
import CartElement from './CartElement';

function Cart() {
  const cartLists = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
      <h2 className="cart-title"></h2>
      <div className="cart-header">
        <span>Products</span>
        <span>Prix Unitaire</span>
        <span>Quantite</span>
        <span>Total</span>
        <span>Action</span>
      </div>
      {cartLists.itemsList.length > 0 ? (
        cartLists.itemsList &&
        cartLists.itemsList.map(
          ({ title, price, quantity, totalPrice, id }) => {
            return (
              <CartElement
                key={id}
                id={id}
                title={title}
                price={price}
                quantity={quantity}
                totalPrice={totalPrice}
              />
            );
          }
        )
      ) : (
        <div>Votre Panier est vide</div>
      )}
    </div>
  );
}

export default Cart;
