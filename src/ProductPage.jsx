import React, { } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const ProductPage = (props) => {
  const {
    status, sort, product, click,
  } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>
              Product name
              <button
                type="button"
                onClick={e => sort(e, 'product')}
                style={{ color: status.product !== '' ? 'green' : '' }}
              >
                { status.product !== '' ? status.product : '↓'}
              </button>
            </th>
            <th>Product image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="body">
          {
            product && product.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={require(`${item.img}`)} width="50px" height="50px" alt="!" /></td>
                <td>
                  <button
                    type="button"
                    className="add-button"
                    onClick={e => click(e, item)}
                  >
                     Add to cart
                  </button>
                </td>
              </tr>
            ))
            }
        </tbody>
      </table>
    </div>
  );
};
ProductPage.propTypes = {
  status: PropTypes.arrayOf(PropTypes.object).isRequired,
  sort: PropTypes.func.isRequired,
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  click: PropTypes.func.isRequired,
};
export default ProductPage;
