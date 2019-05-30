
const initialState = {
    product: [{ id: 101, name: 'Car', img: "./assets/car.png" },
    { id: 102, name: 'Bike', img: "./assets/bike.png" },
    { id: 103, name: 'Television', img: "./assets/tv.png" },
    { id: 104, name: 'Refrigerator', img: "./assets/fridge.png" },
    ],
    cart: [],
    totalQuantity: 0,
    status: {
        name: '',
        product: '',
        quantity: ''
    },
}

const reducer = (state = initialState, action) => {

    let { cart, product, totalQuantity, status } = state
    const { type, value } = action
    const sortColumn = (column, value) => {
        if (status[value] === '↓') {
            column.sort((a, b) => {
                if (a[value] < b[value]) return 1;
                return -1;
            })
        }
        else {
            column.sort((a, b) => {
                if (a[value] > b[value]) return 1;
                return -1;
            })
        }
    }

    switch (type) {

        case 'ADD':
            const index = state.cart.findIndex(val => val.id === value.id)

            if (index > -1) {
                return { ...state, ...cart[index].quantity++, totalQuantity: totalQuantity + 1 }
            }
            else {
                cart.push({ ...value, quantity: 1, checked: false })
                return { ...state, cart, totalQuantity: totalQuantity + 1 }
            }
        case 'REMOVE':
            cart[value].quantity--
            totalQuantity = totalQuantity - 1
            cart = cart.filter(item => item.quantity !== 0)
            return {
                ...state, cart, totalQuantity
            }
        case 'SORT':
            const newStatus = {
                name: '',
                product: '',
                quantity: ''
            }
            newStatus[value] = status[value] === '↓' ||
                status[value] === '' ? '↑' : '↓'
            if (value === 'product') {
                sortColumn(product, value)
            }
            else {
                sortColumn(cart, value)
            }
            return {
                ...state, product: [...state.product], cart: [...state.cart],
                status: { ...newStatus }
            }
        case 'CHECK':
            if (cart[value] && cart[value].checked) {
                cart[value].checked = false
            }
            else {
                cart[value].checked = true
            }
            return {
                ...state, cart: [...state.cart]
            }
        default:
            cart = cart.filter(item => {
                item.checked && (totalQuantity = totalQuantity - item.quantity);
                return !item.checked
            })
            return { ...state, cart, totalQuantity }
    }
}

export default reducer