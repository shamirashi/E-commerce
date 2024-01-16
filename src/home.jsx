import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./css/navbar.css";
import "./css/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
    return(
        <>
        <Upperbar />
        <Nav />
        <div className="container-fluid">
  <div className="row">
    <div className="col-lg-12 image1">
      <img src="/image/tresmode-bg.webp" alt="Fashion" className="imgfluid" />
    </div>
  </div>
</div>
<Fashion />
        <Items />
        <Bottombar />
        </>
    )
}

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
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/customer-care" className="nav-link">Customer Care</Link>
              </li>
              <li className="nav-item">
                <Link to="/loginn" className="nav-link">SignIn</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-nav nav-end ">

            <Link className="nav-link" to="/cart">
              <i className="bi bi-bag-heart-fill bag-cart"></i>
            </Link>

            <Link to="/user-profile">
              <span className="login-man">
                {profileImage ? (
                  <img src={`/file/${profileImage}`} alt="Profile" className="profile-image" />
                ) : (
                  <i className="bi bi-person-circle"></i>
                )}
              </span>
            </Link>

            <Link className="nav-link" to="/reg">
              <button className="btn btn-outline-light login">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
      </>
    );
  }
  
function Items(){
    return(
        <>
       <div className="container mt-4">
  <div className="row">
    <div className="col-lg-3 lg">
      <Link to="/glass">
        <img src="/image/glassnew.webp" alt="glass" className="img-fluid custom-img" />
      </Link>
      <h6 className="h4">Glasses</h6>
    </div>
    <div className="col-lg-3 lg">
      <Link to="/sandal">
        <img src="/image/sandal.jpg" alt="sandals" className="img-fluid custom-img" />
      </Link>
      <h6 className="h4">Sandals</h6>
    </div>
    <div className="col-lg-3 lg">
      <Link to="/jackets">
        <img src="/image/jacket.webp" alt="jackets" className="img-fluid custom-img" />
      </Link>
      <h6 className="h4">Jackets</h6>
    </div>
    <div className="col-lg-3 lg">
      <Link to="/clothes">
        <img src="/image/clothes.webp" alt="clothes" className="img-fluid custom-img" />
      </Link>
      <h6 className="h4">Clothes</h6>
    </div>
  </div>
</div>
        </>
    )
}

function Fashion(){
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <p className="passion">Fashion That Changes You!</p>
            </div>
        </div>
        </div>
        </>
    )
}

function Upperbar(){
  return(
    <>
    <nav className="navbar navbar-dark bg-dark">
      <p className="navbar-text"> Additional 15% OFF! Use Code "CRT15" at checkout. Valid on discounted styles.</p>
    </nav>
    </>
  )
}


function Bottombar(){
  return(
    <>
  <div className="container-fluid coloor">
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img className="logo-bottom" src="../image/tresmode.webp" alt="ShopaHolic" />
      </a>
    </nav>
    <div className="row bottom-nav">
      <div className="col-lg-2">
        <p className="shipping">Shipping Policy</p>
      </div>
      <div className="col-lg-2">
        <p className="return">Return Policy</p>
      </div>
      <div className="col-lg-2">
        <p className="privacy">Privacy Policy</p>
      </div>
      <div className="col-lg-2">
        <p className="terms-cond">Terms and Condition</p>
      </div>
      <div className="col-lg-2">
        <p className="track">Track Order</p>
      </div>
      <div className="col-lg-2">
        <p className="about-us">About Us</p>
      </div>
    </div>
    <div className="row socialmedia d-flex justify-content-center text-center">
  <div className="col-lg-1">
    <i className="bi bi-facebook"></i>
  </div>
  <div className="col-lg-1">
    <i className="bi bi-twitter"></i>
  </div>
  <div className="col-lg-1">
    <i className="bi bi-instagram"></i>
  </div>
</div>
<div className="row copyright">
  <div className="col-lg-12">
     <p>Copyright @ 2024 - All Right Reserved</p>
  </div>
</div>  
  </div>
</>

  )
}

  