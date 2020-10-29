import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../redux/actions/cartActions';

const Shop = (props) => {
   const {products, addToCart} = props; 
    return (
        <div>
            <h4>this is shop</h4>
            {
                products.map(pt=>
                <Product product={pt}
                addToCart={addToCart}
                key={pt.id}
                >

                </Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart, 
        products: state.products
    }
}
const mapDispatchToProps ={
    addToCart : addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);