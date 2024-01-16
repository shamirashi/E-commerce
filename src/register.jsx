
import React, { useState } from "react";
import "./css/register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";


function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [select, setIsSeller] = useState('');
  const [profile, setProfile] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    try{
      const formData = new FormData();
      formData.append('profile', profile);
      formData.append('username', name);
      formData.append('PhoneNumber',PhoneNumber);
      formData.append('password', password);
      formData.append('email', email);
      formData.append('select', select);
const response=await axios.post("http://localhost:3000/api/register",formData);
console.log(response);
   if(response.status===200){
    alert("Registration Successful")
    setName('');
      setPhoneNumber('');
            setPassword('');
            setEmail('');
            setIsSeller('');
            setProfile(null);
            if (select==="1") {
                        navigate('/seller');
                      } else {
                        navigate('/');
                      }
                    } 
                    else {
                      const data = response.data;
                      alert(`Error: ${data.error}`);
                    }
                  } catch (error) {
                    console.error('Error:', error);
                    alert('An error occurred while registering the user.');
                  }
                };
   
                const handleImageChange = (e) => {
                  const file = e.target.files[0];
                  setProfile(file);
                };
      
  return (
    <>
    
    <Nav />
      <div className="login-page">
      <div className="form">

      <form onSubmit={handleRegister} encType="multipart/form-data" className="login-form">
        <h1 className="h1_1">Register</h1>
          <select className="one" name="select" value={select} onChange={(e) => setIsSeller(e.target.value)} >
            <option value="1">Seller</option>
            <option value="2">Buyer</option>
          </select>
          
          <label className="lab1">Profile
          <input type="file" name="profile" id="profile" onChange={handleImageChange} /></label>
          
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
         
          <input type="tel" name="PhoneNumber"id="PhoneNumber" placeholder="Mobile Number" value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
        
          <input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
         
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          
          <input type="submit" value="REGISTER NOW" className="sub2" />
        </form>
      </div>
      </div>
     
    </>
  );
}

export default Register;






// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import Nav from "./nav";
// import "./css/register.css";

// function Register({ setRegistered }) {
//   const navigate = useNavigate();

//   const form = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       buyerCheckbox: false,
//       sellerCheckbox: false,
//       profile: null,
//     },
//     validate: registrationValidation,
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post("/api/register", values);
//         const data = response.data;

//         console.log(data);


//         toast.success("Registration Successful");
//         if (data && data.message === "Registration Successful") {
//           setRegistered(true);
//           navigate("/login");
//         }
//       } catch (error) {
//         console.error("Registration failed", error);
//         toast.error("Failed to register");
//       }
//     },
//   });

//   return (
//     <>
//       <Toaster />
//       <Nav />
//        <div className="registerForm">
//        <form onSubmit={form.handleSubmit}>
//         <h1 className="registerh1">Register</h1>
//         <label>Username:</label>
//         <input type="text"  {...form.getFieldProps("username")} />
//         <label>E-mail:</label>
//         <input type="email" {...form.getFieldProps("email")}  />
//         <label >Password:</label>
//         <input type="password" {...form.getFieldProps("password")} />
//         <label >Buyer:</label>
//         <input type="checkbox" id="buyerCheckbox" {...form.getFieldProps("buyerCheckbox")} checked={form.values.buyerCheckbox}
//          onChange={() => form.setFieldValue("buyerCheckbox", !form.values.buyerCheckbox)}/>
//         <label >Seller:</label>
//         <input type="checkbox" id="sellerCheckbox" {...form.getFieldProps("sellerCheckbox")} checked={form.values.sellerCheckbox}
//            onChange={() => form.setFieldValue("sellerCheckbox", !form.values.sellerCheckbox)}/>
//         <label >Profile:</label>
//         <input type="file" {...form.getFieldProps("profile")} onChange={(event) => form.setFieldValue("profile", event.currentTarget.files[0])} />
//         <input type="submit" className="buttonReg" value="Register" />
//       </form>
//        </div>
//     </>
//   );
// }

// function registrationValidation(values) {
//   const errors = {};
//   if (!/^[a-zA-Z0-9_]{4,12}$/.test(values.username)) {
//     errors.username = "Invalid username";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
//     errors.email = "Invalid e-mail";
//   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
//     errors.password = "Invalid Password";
//   }
//   return errors;
// }

// export default Register;





















