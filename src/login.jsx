import React, { useState } from "react";
import "./css/login.css";
import Nav from "./nav";
import { Link} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        event.preventDefault();
    
        fetch("http://localhost:3000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            return res.text();
        })
        .then(data => {
            if (data.msg) {
                localStorage.setItem("token", data.token);
                alert( data.msg);
                window.location.href="/"
            } else {
                alert(data);
            }
        });
    }
    

    return (
        <>
        <Nav />
        <form onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">login</button>
        </form>
        <div className="row">
          <div className="col-lg-12">
            <p className="register">Don't have an Account?<span><Link to="/reg">Register Here</Link></span> </p>
          </div>
        </div>
        </>
    )
}

  
export default Login;





































// import React  from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./css/login.css";
// import Nav from "./nav";

// export default function Login({setLoggedin}){
//     const navigate = useNavigate();

//     const login = async (e) => {
//         e.preventDefault();
//         const  enteredUsername = document.getElementById("username").value;
//         const enteredPassword = document.getElementById("password").value;

//         try {
//           const response = await axios.post("/api/login", { username:enteredUsername,  password:enteredPassword });
//           const data = response.data
//           localStorage.setItem("token", data.token);
//           console.log(data);
    
//           const dataM =  "Login Succesfull";
//            alert(dataM);
//           if (dataM === "Login Succesfull") {
//             setLoggedin(true);
//             navigate("/");
//           }
//         }
//          catch (error) {
//           console.error("Login failed", error);
//         }
//       };
      
//     return(
//         <>
//         <Nav />
        

