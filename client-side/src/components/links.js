import React from 'react';
import { NavLink } from 'react-router-dom';
// redirect

const Links = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          padding: '20px',
          width: '10%',
          background: '#f0f0f0'
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            {''} <NavLink to="/">Home</NavLink> 
          </li>
          <li>
            {''} <NavLink to="/courselist">Courses</NavLink>
          </li>
          <li>
            {''} <NavLink to="/venderlist">Providers</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
