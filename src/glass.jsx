import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./css/glass.css";

export default function Glass(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="headGlass">Branded Glasses</h1>
                </div>
            </div>
            <GlassItem />
        </div>
        </>
    )
}

function GlassItem(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/Product1/glass');
          const fetchedProducts = response.data;
  
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchProducts();
    }, []);

    return(
        <>
         <div className="row">
    {products.map((product) => (
        <div key={product._id} className="col-lg-4 col-md-4 col-sm-6">
            <Link to={`/glass1/${product._id}`} >
                <img src={`/products/${product.image[0].filename}`} className="img-fluid" alt={product.title} />
            </Link>    
                <p className="g-item1">{product.title}</p>
                <p className="price">Rs. {product.price}</p>
            
        </div>
    ))}
</div>
        </>
    )
}
