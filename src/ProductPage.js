import React, { } from 'react'
import './App.css'

export const ProductPage = (props) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product name<button onClick={e => props.sort(e, 'product')}
                            style={{ color: props.status.product !== '' ? 'green' : '' }} >
                            {props.status.product !== '' ? props.status.product : '↓'}
                        </button></th>
                        <th>Product image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='body'>
                    {
                        props.product && props.product.map((item, key) =>
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img src={require(`${item.img}`)} width="50px" height="50px" alt='!' /></td>
                                <td><button
                                    className='add-button'
                                    onClick={e => props.click(e, item)}>
                                    Add to cart</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
