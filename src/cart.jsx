import React, { useState, useEffect } from 'react';
import './css/navbar.css';
import { Navigate } from 'react-router-dom';

function MyCart() {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, '')), 0);
    return total.toFixed(2);
  };

 
  const PlaceOrder = () => {
    alert("Order Placed Successfully");
    const existingPlacedItems = JSON.parse(localStorage.getItem('PlacedItems')) || [];
   
    const newPlacedItems = [...existingPlacedItems, ...cartItems];
    localStorage.setItem('PlacedItems', JSON.stringify(newPlacedItems));

    
    localStorage.removeItem('cartItems');
    setCartItems([]);
    Navigate('/');
  };
  

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className='no-cart'>
          <p className='cart'>Your cart is empty!!</p>
          <img src='../image/cartsad-.png' className='sadcart' alt='Cart' />
        </div>
      ) : (
        <div>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
                <img src={`/products/${item.image[0].filename}`} className="img-fluid cart-image" alt={item.title} />
                <p>{item.title}</p>
                <p>Rs. {item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p className="total-price">Total Price: Rs. {calculateTotalPrice()}</p>
            </div>
            <div className='col-l-6'>
            <button className='buy' onClick={PlaceOrder}>Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCart;
