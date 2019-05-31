import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import NavBar from './AppBar';

const App = (props) => {
  const {
    addData, sortData, status, product,
    totalQuantity, removeData, cart, handle, deleteArray, getData,
  } = props;
  useEffect(() => {
    const url = '/products';
    axios.get(url).then(response => getData(response.data));
  }, []);
  return (
    <Router>
      <div>
        <NavBar
          quantity={totalQuantity}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ProductPage
              click={addData}
              sort={sortData}
              status={status}
              product={product}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <CartPage
              remove={removeData}
              quantity={totalQuantity}
              sort={sortData}
              status={status}
              cart={cart}
              handleCheck={handle}
              delete={deleteArray}
            />
          )}
        />
      </div>
    </Router>
  );
};
const mapStateToProps = state => ({
  product: state.product,
  totalQuantity: state.totalQuantity,
  cart: state.cart,
  status: state.status,
  markedArray: state.markedArray,
});
const mapDispatchToProps = dispatch => ({
  getData: value => dispatch({ type: 'GET', value }),
  addData: (e, item) => dispatch({ type: 'ADD', value: item }),
  removeData: (e, index) => dispatch({ type: 'REMOVE', value: index }),
  sortData: (e, value) => dispatch({ type: 'SORT', value }),
  handle: (e, value) => dispatch({ type: 'CHECK', value }),
  deleteArray: () => dispatch({ type: 'DELETE' }),
});
App.propTypes = {
  addData: PropTypes.func.isRequired,
  removeData: PropTypes.func.isRequired,
  sortData: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
  deleteArray: PropTypes.func.isRequired,
  status: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalQuantity: PropTypes.number.isRequired,
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  getData: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
