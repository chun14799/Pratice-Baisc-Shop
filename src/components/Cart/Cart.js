import './cart.scss'



const Cart = (props) => {
    const { cartItem, handleAdd, handleRemove, handleCancle } = props
    const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <div className='cart'>
            <h2>Shopping Cart</h2>
            <div className="panel">
                <div className="panel_body">
                    <div className="cart-content">
                        <div>{cartItem.length === 0 && <div >Cart is empty</div>}</div>
                        {cartItem.map((item) => (
                            <div key={item.id} className='row'>
                                <div className='col-4'><button className='cancle' onClick={() => handleCancle(item)}>X</button> {item.name}</div>
                                <div className='col-4'>
                                    <button className='add' onClick={() => handleAdd(item)}>+</button>
                                    <button className='remove' onClick={() => handleRemove(item)}>-</button>
                                </div>
                                <div className='col-4'>
                                    {item.qty} x {item.price} USD
                                </div>
                            </div>
                        ))}
                    </div>
                    {cartItem.length !== 0 && (
                        <div className="total">
                            Total : {itemPrice} USD
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;