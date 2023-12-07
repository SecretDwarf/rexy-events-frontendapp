import React from 'react';
import logoMain from '../assets/mainLogo.png';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <img className='logo' src={logoMain} alt="logo" />
        <li><a href="#get">Get</a></li>
        <li><a href="#set">Set</a></li>
        <li><a href="#post">Post</a></li>
        <li><a href="#delete">Delete</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
