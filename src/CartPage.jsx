import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


const CartPage = (props) => {
  const { status, cart, deleteValue } = props;
  return (
    <div>
      {
       cart.length
         ? (
           <>
             <table className="table">
               <thead>
                 <tr>
                   <th />
                   <th>Product ID</th>
                   <th>
                       Product Name
                     <button
                       type="button"
                       onClick={e => props.sort(e, 'name')}
                       style={{ color: status.name !== '' ? 'green' : '' }}
                     >
                       {status.name !== '' ? status.name : '↓'}
                     </button>
                   </th>
                   <th>
                       Quantity
                     <button
                       type="button"
                       onClick={e => props.sort(e, 'quantity')}
                       style={{ color: status.quantity !== '' ? 'green' : '' }}
                     >
                       {status.quantity !== '' ? status.quantity : '↓'}
                     </button>
                   </th>
                   <th>Product image</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody
                 className="body"
               >
                 {
                 cart.map((item, key) => item.quantity > 0
                    && (
                      <tr key={item.id}>
                        <td>
                          <input
                            type="checkbox"
                            onChange={e => props.handleCheck(e, key)}
                            checked={item.checked}
                          />
                        </td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <img
                            src={require(`${item.img}`)}
                            width="50px"
                            height="50px"
                            alt="!"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="add-button"
                            onClick={e => props.remove(e, key)}
                          >
                             Delete from cart
                          </button>
                        </td>
                      </tr>
                    ))
            }
               </tbody>
             </table>
             <button
               type="button"
               onClick={deleteValue}
             >
               Delete selected
             </button>
           </>
         )
         : (
           <p className="empty">Cart is Empty</p>
         )
            }
    </div>
  );
};
CartPage.propTypes = {
  status: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  sort: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  deleteValue: PropTypes.func.isRequired,
};
export default CartPage;
