import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import { MdMenu} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx';

const Navbar = () => {
  const [menu,setMenu]= useState("Home")
  const [isMobile, setIsMobile]=useState(false)
    
  return (
    <div className='profile'>
        <div  className='navbar'>
            <ul className={isMobile? "nav-link" : "nav-link-mobile"} onClick={()=>setIsMobile(false)} > 
              <li onClick={()=>setMenu("Home")}><a href='#home'>Home</a>{menu==="Home"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("About")}><a href='#about'>About</a>{menu==="About"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("Skills")}><a href='#skills'>Skills</a>{menu==="Skills"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("Project")}><a href='#project'>Project</a>{menu==="Project"?<hr/>:<></>}</li>
              <li onClick={()=>setMenu("Contact")}><a href='#contact'>Contact</a>{menu==="Contact"?<hr/>:<></>}</li>
            </ul> 
            <p className='nav-btn' onClick={()=>setIsMobile(!isMobile)} >{isMobile?<MdMenu/>:<RxCross2/>} </p> 
        </div> 
    </div>
  )
}

export default Navbar