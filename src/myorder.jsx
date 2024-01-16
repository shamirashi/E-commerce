import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyOrder = () => {
    return(
        <>
        <Nav />
        <Sidebar/>
        </>
    )
}

function Nav() {
   
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
            </ul>
          </div>
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
    return(
        <>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-3 box">
                    <div>
                        <p className="user">Hello,{userName} </p>
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
                       <button className="per">Sign Out</button>
                    </Link>  
                   </div>
                </div>
                <Order/>
            </div>
        </div>
        </>
    )
}

const Order = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('PlacedItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  return (
    <>
      <div className="col-lg-9">
        <p className="ord">My Order</p>
        <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
                <img src={`/products/${item.image[0].filename}`} className="img-fluid cart-image" alt={item.title} />
                <p>{item.title}</p>
                <p>Rs. {item.price}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};


// const Sidebar = () => {
//   const [userDetails, setUserDetails] = useState([]);
//   const [userOrders, setUserOrders] = useState([]);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:3000/api/get-private-data', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const fetchedUserDetails = response.data;
       
//         setUserDetails(fetchedUserDetails);

       
//         const userOrdersResponse = await axios.get(`http://localhost:3000/api/get-user-orders/${fetchedUserDetails._id}`);
//         const fetchedUserOrders = userOrdersResponse.data;
//         setUserOrders(fetchedUserOrders);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchDetails();
//   }, []);

//   const userName = userDetails.username;

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-lg-3 box">
//             <div>
//               <p className="user">Hello, {userName} </p>
//             </div>
//             <div className="per1">
//               <Link to='/Myorder'>
//                 <p className="per">My Orders</p>
//               </Link>
//               <Link to='/user-profile'>
//                 <p className="per">Your Account</p>
//               </Link>
//               <Link to='/'>
//                 <p className="per">Customer Service</p>
//               </Link>
//               <Link to='/'>
//                 <button className="per">Sign Out</button>
//               </Link>
//             </div>
//           </div>
//           <Order userOrders={userOrders} />
//         </div>
//       </div>
//     </>
//   );
// };

// const Order = ({ userOrders }) => {
//   return (
//     <>
//       <div className="col-lg-9">
//         <p className="ord">My Order</p>
//         <div className="row">
//           {userOrders.map((item) => (
//             <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
//               <img src={`/products/${item.image[0].filename}`} className="img-fluid cart-image" alt={item.title} />
//               <p>{item.title}</p>
//               <p>Rs. {item.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

export default MyOrder;