import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , Navigate} from "react-router-dom";
import './css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserProfile = () => {
    return(
        <>
         <Nav />
        <Sidebar />
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

  const userData= userdetails;
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
           {userData.select=="1" && (
             <div className='navbar-nav nav-end'>
              <Link to="/seller"><button>Sell + </button></Link>
          </div>
           )}
         
        </div>
      </nav>
      </>
    );
  }

const Sidebar = () => {

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

  const userName = userdetails.username;

  const SignOut = () => {  
      let token = localStorage.getItem("token");
      if(token){
        localStorage.removeItem("token");
      }
      Navigate('/');
    }
  
 

    return(
        <>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-3 box">
                    <div>
                        <p className="user">Hello, {userName} </p>
                    </div>
                   <div className="per1">
                    <Link to='/Myorder'>
                      <p className="per">My Orders</p>  
                    </Link>
                    <Link to='/user-profile'>
                      <p className="per">Your Account</p>  
                    </Link>  
                    <Link to='/'>
                        <p className="per">Customer Service</p> 
                    </Link> 
                    <Link to='/'>
                       <button className="per" onClick={SignOut}>Sign Out</button>
                    </Link>  
                   </div>
                </div>
                <FAQ />
            </div>
        </div>
        </>
    )
}

const FAQ = () => {
    return(
        <>
        <div className="col-lg-9">
                    <div className="row FAQ">
                        <div className="col-lg-4">
                            <img className="secure" src="../image/secure.jpg" alt="pic" />
                        </div>
                        <div className="col-lg-4">
                            <img className="secure" src="../image/24.avif" />
                        </div>
                        <div className="col-lg-4">
                            <img className="secure" src="../image/fast.avif" />
                        </div>
                        <div className="col-lg-12 mt-4">
                            <h3>FAQs on Tresmode Women's Fashion Store</h3>
                        </div>
                        <div className="col-lg-12">
                            <h6>What is the best sandal to walk in?</h6>
                            <p>The best walking sandals are those that provide both support and comfort. Look for sandals with supportive footbeds, adjustable straps, and good arch support to keep your foot in place. Consider a moderate heel height that is comfortable for walking.</p>
                            <h6>What are the things to keep in mind while buying ladies sandals online?</h6>
                            <p>When buying women's sandals online, consider referring to the size guide provided by the store and measuring your feet. Choose a sandal that is suitable, comfortable, and made of breathable materials. Check out the retailer's return policy.</p>
                            <h6>Are sandals comfortable to wear daily?</h6>
                            <p>It depends on a number of factors, including the sandal's design and fit and whether you are comfortable wearing sandals all day. In general, sandals with a supportive arch, padded footbed, and adjustable straps can offer comfort for daily usage</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default UserProfile;