import { useState,useEffect } from 'react';
import logoImage from '../assets/companylogo.png';
import {Link} from 'react-router-dom'

export let Navbar=()=>{
  
  let [log,setLog]=useState('Login');

  useEffect(()=>{
    console.log("hi im rendered")
  },[])
    console.log("hiii")

  function changeLog(){
     setLog(log=="Login"?"LogOut":'Login');
  }
  
  return (
  <div className='navbar'>
    <img className='logoImage' src={logoImage}></img>
    <div className='menueContainer'>
      <div className="simple-menue-btn"><Link to="/">Home</Link></div>
      <div className="simple-menue-btn"><Link to='/about'>About Us</Link></div>
      <div className="simple-menue-btn"><Link to="/Contact">Contact Us</Link></div>
      <div className='simple-menue-btn'>Cart</div>
      <button className='simple-menue-btn' onClick={changeLog}>{log}</button>
    </div>
  </div>
)
}

export default Navbar;