import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const item = { id: uuid(), ...product };
    setCart([...cart, item]);
  };

  const productList = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default ProductList;
