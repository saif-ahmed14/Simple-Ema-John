import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

/*      let totalPrice = 0;
     for(const product of props.cart){
         totalPrice = totalPrice + product.price;
     } */

     const totalPrice = cart.reduce( (previous, current) => previous + current.price, 0);

    return (
        <div>
            <h3>Order Summary</h3>
            <h6>Items Ordered: {props.cart.length} </h6>
            <br />
            <h5>Total Price: {totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;