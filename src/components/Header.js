import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => (
  <header>
    <div className="container">
      <div>
        <img src={logo} alt="Loading..." style={{width:"45px"}}/>
      </div>
      <nav>
        <ul className="nav-links">
          <li className='nav-links_li'><Link to="/">Home</Link></li>
          <li className='nav-links_li'><Link to="/projects">Projects</Link></li>
         
          <li className='nav-links_li'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
