import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './css/seller.css';

const Seller = () => {
  return (
    <>
      <Nav />
      <Post />
      <Category />
      <Blue />
    </>
  );
};

const Post = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <p className="seller-h1">
            "Unleash your creativity with our cutting-edge Product. Transform your ideas into reality - the possibilities are endless!"
          </p>
        </div>
        <div className="col-lg-6">
          <img className="seller-pic" src="../image/seller-bg.jpg" alt="Seller" />
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/${category.toLowerCase()}`);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="choose">Choose Your Category</p>
          </div>
          <div className="row petti">
            <div className="col-lg-3">
              <button className="bor-glass" onClick={() => handleCategoryClick('product1')}>
                Glass
              </button>
            </div>
            <div className="col-lg-3">
              <button className="bor-sandal" onClick={() => handleCategoryClick('product2')}>
                Sandal
              </button>
            </div>
            <div className="col-lg-3">
              <button className="bor-jac" onClick={() => handleCategoryClick('product3')}>
                Jackets
              </button>
            </div>
            <div className="col-lg-3">
              <button className="bor-cloth" onClick={() => handleCategoryClick('product4')}>
                Clothes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Blue = () => {
  return (
    <>
      <div className="container-fluid blue">
        <div className="row">
          <div className="col-lg-12">
            <p className="why">Why sell on tresmode?</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-3">
            <i className="bi bi-truck circle"></i>
            <p className="cir">World Wide Shipping</p>
            <p className="sent">Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
          <div className="col-lg-3">
            <i className="bi bi-percent circle"></i>
            <p className="cir">Higher Profit</p>
            <p className="sent">With 0% commission*, you take 100% profits with you</p>
          </div>
          <div className="col-lg-3">
            <i className="bi bi-headset circle"></i>
            <p className="cir">24x 7 Support</p>
            <p className="sent">All your queries and issues are answered by our dedicated Seller Support Team</p>
          </div>
          <div className="col-lg-3">
            <i className="bi bi-credit-card circle "></i>
            <p className="cir">Fast & Regular Payments</p>
            <p className="sent">Get payments as fast as 7-10 days from the date of dispatch</p>
          </div>
        </div>
      </div>
    </>
  );
};

function Nav() {
  const [userdetails, setUserdetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/get-private-data', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedProducts = response.data;
        setUserdetails(fetchedProducts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDetails();
  }, []);

  const profileImage = userdetails.profile && userdetails.profile[0]?.filename;

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src="../image/tresmode.webp" alt="ShopaHolic" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customer-care" className="nav-link">
                  Customer Care
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-end">
            <Link to="/user-profile">
              <span className="login-man">
                {profileImage ? (
                  <img src={`/file/${profileImage}`} alt="Profile" className="profile-image" />
                ) : (
                  <i className="bi bi-person-circle"></i>
                )}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Seller;

