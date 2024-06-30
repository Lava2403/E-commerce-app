import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  if (cart.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/">Back to Product List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </ul>
      <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
      <Link to="/">Back to Product List</Link>
    </div>
  );
};

export default Cart;
