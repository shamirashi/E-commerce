import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import './css/product.css';

const Product1 = () => {
  const navigate = useNavigate();
  const [glass, setGlass] = useState(0);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('glass');
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('price', price);
      formData.append('quantity', quantity); 
      formData.append('image', image);
      formData.append('category', category);

      setGlass((prevGlass) => prevGlass + parseInt(quantity, 10));

      
      const response = await axios.post('http://localhost:3000/api/Product1', formData);

      if (response.status === 200) {
        alert('Product submitted successfully!');
        navigate('/seller');

        setTitle('');
        setPrice('');
        setQuantity('');
        setImage(null);
        setCategory('Glass'); 
        
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the product.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
 
  return (
    <div className="container-fluid"> 
        <p className='ad'>POST YOUR AD</p>
    <div className='row'>  
    <form className="product-form mt-5" onSubmit={handleSubmit}>
    <p className='side-h'>INCLUDE SOME DETAILS</p> 

      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

      <p>Total Glass Quantity: {glass}</p>

      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required  />
      
      <button type="submit" className='buttonlog'>POST NOW</button>
    </form>
    </div> 
    </div>
  );
};

const Product2 = () => {
    const navigate = useNavigate();
    const [sandal, setSandal] = useState(0);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('sandal');
   
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
        formData.append('category', category);
  
        setSandal((prevSandal) => prevSandal + parseInt(quantity, 10));
  
        
        const response = await axios.post('http://localhost:3000/api/Product2', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
          navigate('/seller');
  
          setTitle('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setCategory('Sandal'); 
          
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
   
    return (
      <div className="container-fluid"> 
          <p className='ad'>POST YOUR AD</p>
      <div className='row'>  
      <form className="product-form mt-5" onSubmit={handleSubmit}>
      <p className='side-h'>INCLUDE SOME DETAILS</p> 
  
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <p>Total Sandal Quantity: {sandal}</p>
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required  />
        
        <button type="submit" className='buttonlog'>POST NOW</button>
      </form>
      </div> 
      </div>
    );
};

const Product3 = () => {
    const navigate = useNavigate();
    const [jacket, setJacket] = useState(0);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('jacket');
   
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
        formData.append('category', category);
  
        setJacket((prevJacket) => prevJacket + parseInt(quantity, 10));
  
        
        const response = await axios.post('http://localhost:3000/api/Product3', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
          navigate('/seller');
  
          setTitle('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setCategory('Jacket'); 
          
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
   
    return (
      <div className="container-fluid"> 
          <p className='ad'>POST YOUR AD</p>
      <div className='row'>  
      <form className="product-form mt-5" onSubmit={handleSubmit}>
      <p className='side-h'>INCLUDE SOME DETAILS</p> 
  
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <p>Total Jacket Quantity: {jacket}</p>
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required  />
        
        <button type="submit" className='buttonlog'>POST NOW</button>
      </form>
      </div> 
      </div>
    );
};

const Product4 = () => {
    const navigate = useNavigate();
    const [cloth, setCloth] = useState(0);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('Clothes');
   
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
        formData.append('category', category);
  
        setCloth((prevCloth) => prevCloth + parseInt(quantity, 10));
  
        
        const response = await axios.post('http://localhost:3000/api/Product4', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
          navigate('/seller');
  
          setTitle('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setCategory('Clothes'); 
          
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
   
    return (
      <div className="container-fluid"> 
          <p className='ad'>POST YOUR AD</p>
      <div className='row'>  
      <form className="product-form mt-5" onSubmit={handleSubmit}>
      <p className='side-h'>INCLUDE SOME DETAILS</p> 
  
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <p>Total Cloth Quantity: {cloth}</p>
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required  />
        
        <button type="submit" className='buttonlog'>POST NOW</button>
      </form>
      </div> 
      </div>
    );
  };

export {Product1 , Product2, Product3, Product4};
