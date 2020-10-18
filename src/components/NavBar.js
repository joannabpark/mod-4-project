import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
      <li> <NavLink to="/">Home</NavLink> </li>
      <li> <NavLink to="/login">Login</NavLink> </li>
      <li> <NavLink to="/newnote">New Note</NavLink> </li>
      <li> <NavLink to="/editnote">Edit Note</NavLink> </li>
      </ul> 
    </div>
  );
};

export default NavBar;