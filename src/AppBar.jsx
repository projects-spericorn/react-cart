import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = (props) => {
  const { quantity } = props;
  return (
    <ul className="list">
      <li>
        <Link
          to="/cart"
          style={{ float: 'right' }}
        >
        Cart
      (
          { quantity }
)
        </Link>
      </li>
      <li>
        <Link to="/" style={{ float: 'right' }}>Products</Link>
      </li>
      <li>
        <Link to="/" style={{ float: 'left' }}>Back</Link>
      </li>
    </ul>
  );
};
NavBar.propTypes = {
  quantity: PropTypes.number.isRequired,
};
export default NavBar;
