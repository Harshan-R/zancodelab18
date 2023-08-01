import React, { useState } from "react";
import data from "./db/data";

function ProductList() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedProduct = { ...product, quantity: product.quantity + 1 };
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
  };

  const removeFromCart = (product) => {
    if (product.quantity === 1) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.title !== product.title)
      );
    } else {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.title === product.title ? updatedProduct : item
        )
      );
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      {data.map((product) => (
        <div key={product.title}>
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
          {product.star}
          <span>{product.reviews}</span>
          <p>Previous Price: {product.prevPrice}</p>
          <p>New Price: {product.newPrice}</p>
          <p>Company: {product.company}</p>
          <p>Color: {product.color}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.title}>
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
}

export default ProductList;
