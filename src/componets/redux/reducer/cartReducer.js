const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions")

const initialstate = {
    cart: [],
    products: [  {name:'dell laptop', id:1},
    {name:'lenova laptop', id:2},
    {name:'hp laptop', id:3},
    {name:'apple laptop', id:4},
    {name:'asus laptop', id:5}]
}

const cartReducer =( state= initialstate, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name, 
                cartId: state.cart.length +1
            }
            const newCart =[...state.cart, newItem]
            return {...state, cart: newCart}
            case REMOVE_FROM_CART: 
            const id = action.id; 
            const remainCart = state.cart.filter(item =>item.cartId !==id)
            return{...state, cart: remainCart}
            default: 
            return state; 
    }
}

export default cartReducer ;