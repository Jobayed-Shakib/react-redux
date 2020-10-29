import React from 'react';

const Product = (props) => {
    const {product, addToCart} = props
    return (
        <div style={{border:'1px solid gray', padding:'5px', margin:'10px'}}>
            <h3>{product.name}</h3>
            <button onClick={()=>addToCart(product.id, product.name)}>add to cart</button>
        </div>
    );
};

export default Product;