import React, { } from 'react';
import './App.css'
import { ProductPage } from './ProductPage';
import { CartPage } from './CartPage'
import { NavBar } from './AppBar';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = props => {
    const { addData, sortData, status, product,
          totalQuantity, removeData, cart,handle,deleteArray } = props
    return (
        <Router>
            <div>
                <NavBar
                    quantity={totalQuantity} />
                <Route exact path='/'
                    render={() => (
                        <ProductPage
                            click={addData}
                            sort={sortData}
                            status={status}
                            product={product}
                        />
                    )}
                />
                <Route path='/cart'
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
                    )} />
            </div>
        </Router>
    )
}
const mapStateToProps = (state) => {
    return {
        product: state.product,
        totalQuantity: state.totalQuantity,
        cart: state.cart,
        status: state.status,
        markedArray: state.markedArray
}
}
const mapDispatchToProps = dispatch => {
    return {
        addData: (e, item) => dispatch({ type: 'ADD', value: item }),
        removeData: (e, index) => dispatch({ type: 'REMOVE', value: index }),
        sortData: (e, value) => dispatch({ type: 'SORT', value: value }),
        handle:(e,value)=> dispatch({type:'CHECK', value:value}),
        deleteArray:()=> dispatch({type:'DELETE'})
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App)

