import React, {useContext} from 'react'
import ContextObject from './ContextObject'
import { NavLink } from "react-router-dom";


function NavBar() {
  const {currentUser} = useContext(ContextObject)

  return (
    <div>
      
      
            {/**create links to routes that render Menu component which shows a list of linked items which are either snacks or drinks */}
            <div>
              <NavLink to='/' style={{marginRight:'10px'}}>Home</NavLink>
              <NavLink to="/companies" style={{marginRight:'10px'}}>Companies</NavLink>
              <NavLink to='/jobs' style={{marginRight:'10px'}}>Jobs</NavLink>
              
                {currentUser ? (
                <>
                  <NavLink to="/profile" style={{marginRight:'10px'}}>Profile</NavLink>
                  <NavLink to='/logout' style={{marginRight:'10px'}}>Logout</NavLink>
                </>
                  ) : (
                    <>
                    <NavLink to="/login" style={{marginRight:'10px'}}>Login</NavLink>
                    <NavLink to='/signup' style={{marginRight:'10px'}}>Signup</NavLink>
                    
                    </>
                
                )}
                {currentUser ? (
                  <h3>{currentUser.firstName}</h3> 
                  ) : (
                    null
                    )
      }
              </div>
            
           

    
        
    </div>
  );
}

export default NavBar;