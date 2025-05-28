import { useState } from 'react';
import logoImage from '../assets/—Pngtree—restaurant logo_8330101.png';
import {Link} from 'react-router-dom'
import useOnlineChecker from '../utils/useOnlineChecker';

export let Navbar=()=>{
  
  let [log,setLog]=useState('Login');
  let online=useOnlineChecker();

  function changeLog(){
     setLog(log=="Login"?"LogOut":'Login');
  }
  
  return (
  <div className='flex bg-[#FBFBFB] justify-between h-28'>
    <img className='w-32 h-26 ml-4' src={logoImage}></img>
    <div className='w-200 p-6 flex  justify-evenly' >
      <div className="flex items-center text-xl font-medium">Online status :{(online?"🟢":"🔴")}</div>
      <div className="flex items-center"><Link className='text-xl font-medium' to="/">Home</Link></div>
      <div className="flex items-center"><Link className='text-xl font-medium' to='/about'>About Us</Link></div>
      <div className="flex items-center"><Link className='text-xl font-medium' to="/Contact">Contact Us</Link></div>
      <div className="flex items-center"><Link className='text-xl font-medium' to="/Contact">Contact Us</Link></div>
      <button className='text-xl font-medium ' onClick={changeLog}>{log}</button>
    </div>
  </div>
)
}

export default Navbar;