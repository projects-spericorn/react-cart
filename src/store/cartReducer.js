// const initialState={
//     cart: [],
//     totalQuantity: 0,
//     status: {
//         name: '',
//         product: '',
//         quantity: ''
//     }
// }

// const cartReducer=(state=initialState,action)=>{
//     const {cart,totalQuantity}=state
//     switch(action.type){
//         case 'REMOVE':
//                 cart[action.value].quantity--
//                 totalQuantity = totalQuantity - 1
//                 cart = cart.filter(item => item.quantity !== 0)
//                 return {
//                     ...state, cart, totalQuantity
//                 }
//     }

// }