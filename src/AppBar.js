import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export const NavBar = (props) => {
    return (
        <ul className='list'>
            <li><Link to='/cart' style={{ float: 'right' }}>Cart({props.quantity})</Link></li>
            <li><Link to='/' style={{ float: 'right' }}>Products</Link></li>
            <li><Link to='/' style={{ float: 'left' }}>Back</Link></li>
        </ul>
    )
}