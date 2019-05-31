
const initialState = {
//   product: [{ id: 101, name: 'Car', img: './assets/car.png' },
//     { id: 102, name: 'Bike', img: './assets/bike.png' },
//     { id: 103, name: 'Television', img: './assets/tv.png' },
//     { id: 104, name: 'Refrigerator', img: './assets/fridge.png' },
//   ],
  product: [],
  cart: [],
  totalQuantity: 0,
  status: {
    name: '',
    product: '',
    quantity: '',
  },
};
const reducer = (state = initialState, action) => {
  let { cart, product, totalQuantity } = state;
  const { status } = state;
  const { type, value } = action;
  let index;
  const newStatus = {
    name: '',
    product: '',
    quantity: '',
  };
  const sortColumn = (column, item) => {
    if (status[item] === '↓') {
      column.sort((a, b) => {
        if (a[item] < b[item]) return 1;
        return -1;
      });
    } else {
      column.sort((a, b) => {
        if (a[item] > b[item]) return 1;
        return -1;
      });
    }
  };
  switch (type) {
    case 'ADD':
      index = state.cart.findIndex(val => val.id === value.id);
      if (index > -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ ...value, quantity: 1, checked: false });
      }
      return { ...state, cart, totalQuantity: totalQuantity + 1 };
    case 'REMOVE':
      cart[value].quantity -= 1;
      totalQuantity -= 1;
      cart = cart.filter(item => item.quantity !== 0);
      return { ...state, cart, totalQuantity };
    case 'SORT':
      newStatus[value] = status[value] === '↓'
            || status[value] === '' ? '↑' : '↓';
      if (value === 'product') {
        sortColumn(product, value);
      } else {
        sortColumn(cart, value);
      }
      return {
        ...state,
        product: [...state.product],
        cart: [...state.cart],
        status: { ...newStatus },
      };
    case 'CHECK':
      if (cart[value].checked) {
        cart[value].checked = false;
      } else {
        cart[value].checked = true;
      }
      return {
        ...state, cart: [...state.cart],
      };
    case 'DELETE':
      cart = cart.filter((item) => {
        if (item.checked) {
          totalQuantity -= item.quantity;
        }
        return !item.checked;
      });
      return { ...state, cart, totalQuantity };
    case 'GET':
      product = value;
      return { ...state, product };
    default:
      return state;
  }
};

export default reducer;
