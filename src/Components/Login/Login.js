import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContaxt';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}=useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleLogin =(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
      navigate('/')
    }).catch((err) =>{
      alert(err.message)
    })
    
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
       <Link to={'/signup'}><a>Signup</a></Link>
      </div>
    </div>
  );
}

export default Login;
