import { useState  } from 'react'
import {BrowserRouter , Routes , Route } from "react-router-dom" ;


import Register from "./register.jsx";
import Home from './home.jsx';
import Login from './login.jsx';
import Glass from './glass.jsx';
import Sandals from './sandals.jsx';
import Jackets from './jackets.jsx';
import Clothes from './clothes.jsx';
import GlassProduct from './glassview.jsx';
import SandalProduct from './sandalview.jsx';
import JacketProduct from './jacketview.jsx';
import ClothProduct from './clothview.jsx';
import Seller from './seller.jsx';
import {Product1 , Product2, Product3, Product4} from './product.jsx';
import UserProfile from './profile.jsx';
import MyOrder from './myorder.jsx';
import MyCart from './cart.jsx';
import About from './about.jsx';
import axios from 'axios'; 

function App() {
  let mode = import.meta.env.MODE;
  if(mode == "development"){
    axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`;

  }
  if(mode == "production"){
    axios.defaults.baseURL = location.origin;
  }
    const [isLoggedin , setLoggedin] = useState(false);
    const [isRegistered , setRegistered] = useState(false);

   
    

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/reg" element={<Register setRegistered={setRegistered} />} />
        <Route path="/loginn" element={<Login setLoggedin={setLoggedin} />}  />
        <Route path='/' element={<Home />} />
        <Route path='/glass' element={<Glass />} />
        <Route path='/sandal' element={<Sandals />} />
        <Route path='/jackets' element={<Jackets />} />
        <Route path='/clothes' element={<Clothes />} />

        <Route path='/glass1/:id' element={<GlassProduct />} />
        <Route path='/sandal1/:id' element={<SandalProduct />} />
        <Route path="/jacket1/:id" element={<JacketProduct />} />
        <Route path='/cloth1/:id' element={<ClothProduct />} />

        <Route path='/seller' element={<Seller />} />
        <Route path='/product1' element={<Product1 />} />
        <Route path='/product2' element={<Product2 />} />
        <Route path='/product3' element={<Product3 />} />
        <Route path='/product4' element={<Product4 />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/Myorder' element={<MyOrder />} />
        <Route path='/cart' element={<MyCart />} />
        <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;




