import React from 'react'
import {NavLink} from 'react-router-dom';
// import { Outlet, Link } from "react-router-dom";


import "./Nav.css"
import Profile from "../../images/Profile.png"

const Nav = () => {
  return (
     <div className='n-wrapper'>
        <div className='n-left'>
           <div className='n-name'>Donate & <span style={{color:'red'}}>Save</span></div>
        </div>
        <div className='n-middle'>
           <div className='n-list'>
           {/* class="text-danger" */}
                <ul  style={{listStyleType:"none"}}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/RecieverModule">Personal Details</NavLink>
                    <NavLink to="/DonarInputPage">Donation Details</NavLink>
                    <NavLink to="/Stock">Stock</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </ul>
           </div>
        </div>
        <div className='n-right'>
        {/* <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover on bottom
</button> */}
        <img src={Profile} alt='alt'/></div>
        {/* <Outlet/> */}
    </div>
    
   
  )
}

export default Nav