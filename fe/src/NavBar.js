import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div>
      
            {/**create links to routes that render Menu component which shows a list of linked items which are either snacks or drinks */}
            <NavLink to="/companies" style={{marginRight:'10px'}}>Companies</NavLink>
            <NavLink to='/jobs' style={{marginRight:'10px'}}>Jobs</NavLink>
            <NavLink to="/login" style={{marginRight:'10px'}}>Login</NavLink>
            <NavLink to='/signup' style={{marginRight:'10px'}}>Signup</NavLink>
            <NavLink to="/profile" style={{marginRight:'10px'}}>Profile</NavLink>
        
    </div>
  );
}

export default NavBar;