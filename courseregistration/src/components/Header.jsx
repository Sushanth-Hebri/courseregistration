import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import '../css/Header.css'; // Ensure this path is correct

const Header = ({ heading }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets/bms_logo.png" alt="Logo" /> 
        </div>
        <ul>
          <li className="center-item">
            <span>{heading}</span>
          </li>
          <li>
            <div className='logout'>Logout</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
