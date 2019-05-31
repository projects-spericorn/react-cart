import React from 'react';
import './App.css';

const CartPage = (props) => {
    const { name, quantity } = props.status;
    return (
        <div>
            {
               props.cart.length 
                ? <>
                  <table className="table">
                    <thead>
                      <tr><th></th>
                                <th>Product ID</th>
                                <th>Product Name<button
                                    onClick={e => props.sort(e, 'name')}
                                    style={{ color: name !== '' ? 'green' : '' }}>
                                    {name !== '' ? name : "↓"}</button></th>
                                <th>Quantity<button
                                    onClick={e => props.sort(e, 'quantity')}
                                    style={{ color: quantity !== '' ? 'green' : '' }}>
                                    {quantity !== '' ? quantity : "↓"}</button></th>
                                <th>Product image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='body'>
                            {
                                props.cart.map((item, key) => (
                                    item.quantity > 0 &&
                                    <tr key={key}>
                                        <td><input type="checkbox"
                                         onChange={e=>props.handleCheck(e,key)}
                                         checked={item.checked}/></td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td><img src={require(`${item.img}`)}
                                            width="50px" height="50px" alt="!" /></td>
                                        <td><button className="add-button"
                                            onClick={e => props.remove(e, key)}>
                                            Delete from cart</button></td>
                                    </tr>
                                )
                                )
                            }
                          
                        </tbody>
                    </table>
                      <button onClick={props.delete}>Delete selected</button>
                      </>
                    :
                    <p className='empty'>Cart is Empty</p>
            }
        </div>
    )
}
export default CartPage;