import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Cart.css'
const Cart = ({cart, clearCart, children}) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product)
        quantity = quantity + product.quantity;
         total = total + product.price * product.quantity;
         shipping = shipping + product.shipping;
    }

    // const taxString = (total * 0.1).toFixed(2);
    // const tax = parseInt(taxString);
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax ;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            {/* <p>Grand Total: {grandTotal}</p> */}
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            <button className='clear-cart' onClick={clearCart}>Clear Cart
                <FontAwesomeIcon className='dl-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;