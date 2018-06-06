import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="/add">
            Add a New Ride
          </Link>
        </li>
        <li>
          <Link to="/ride">
            Upcoming Rides
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
