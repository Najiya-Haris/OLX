import React ,{useEffect,useContext }from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Sigup';
import Login from './Pages/Login';
import {AuthContext,FirebaseContext} from './store/FirebaseContaxt';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Post from './store/PostContext';

/**
 * ?  =====Import Components=====
 */


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) =>{
   setUser(user); 
  })
})
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/view' element={<View/>}/>

        </Routes>
      </Router>
      </Post>

    </div>
  );
}

export default App;
