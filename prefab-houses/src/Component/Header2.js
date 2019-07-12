import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const Header2 = () => (
  <header>
     <nav>
      <ul>
         {
          !isAuthenticated() && (
            <li><Link to='/login'>Login</Link></li>
          )
        }
        {
          isAuthenticated() && (
            <li><Link to='/logout'>Logout</Link></li>
          )
        }
      </ul>
    </nav>
  </header>
)

export default Header2;
