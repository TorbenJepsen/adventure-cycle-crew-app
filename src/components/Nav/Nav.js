import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/user">
            User Home
          </NavLink>
        </li>
        <li>
        <NavLink to="/home">
            Login
        </NavLink>
        </li>
        <li>
          <NavLink to="/info">
            Info Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">
            Add a New Ride
          </NavLink>
        </li>
        <li>
          <NavLink to="/ride">
            Upcoming Rides
          </NavLink>
        </li>
        <li>
          <NavLink to="/myrides">
            My Rides
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
