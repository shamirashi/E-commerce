import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import "./css/glass1-9.css";

function GlassProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/Product1/glass1/${id}`);
        const fetchedProduct = response.data;

        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) {
      console.error('Product data is not available');
      return;
    }
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newCartItems = [...existingCartItems, { id: product._id, title: product.title, image: product.image, price: product.price, quantity: 1 }];
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    console.log('Product added to cart:', product);
    alert('Product added to cart!');
  };

  if (!product) {
    return <p>Loading...</p>;
  }
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
      <div className="row">
        <div className="col-lg-6">
          {product.image && product.image[0] && (
            <img
              src={`/products/${product.image[0].filename}`}
              alt={product.title}
              className="img-fluid view-image"
            />
          )}
        </div>
        <div className="col-lg-6">
          <p className="brand-name">{product.title}</p>
          <p className="rate">Rs. {product.price}</p>
          <p className="head-size">Size :</p>
          <div className="row">
            <div className="col-lg">
              <p className="border-size">36</p>
            </div>
            <div className="col-lg">
              <p className="border-size">37</p>
            </div>
            <div className="col-lg">
              <p className="border-size">38</p>
            </div>
            <div className="col-lg">
              <p className="border-size">39</p>
            </div>
            <div className="col-lg">
              <p className="border-size">40</p>
            </div>
          </div>
          <p className="head-quant">Quantity :</p>
          <input
            type="number"
            id="quantity"
            className="quantity-input"
            min="1"
            max="3"
            value={product.quantity}
            onChange={(e) => console.log(e.target.value)} 
          />
          <div className="row">
            <div className="col-lg-6">
              <Link to='/cart'>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </Link>
            </div>
            <div className="col-lg-6">
              <button className="add-to-cart-button" onClick={PlaceOrder} >
                Buy It Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassProduct;
