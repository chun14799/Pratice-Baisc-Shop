import React from 'react';
import './cart.scss'



const Cart = () => {
    return (
        <div className='cart'>
            <div className="panel">
                <div className="panel_body">
                    <div className="cart-content">
                        Cart is empty
                    </div>
                    <div className="total">
                        Total : 0 USD
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;