import React from 'react';
import { NavLink } from 'react-router-dom';
// redirect

const Links = () => {
  return (
    <div>
      <ul className="nav">
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/courselist">Courses </NavLink></li>
       <li><NavLink to="/venderlist">Providers </NavLink></li>
       <li><NavLink to="/vendercreate">SignIn/SignUp</NavLink></li>
      </ul>
    </div>
  );
};

export default Links;
