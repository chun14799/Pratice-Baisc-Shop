import './card.scss';



const Card = (props) => {
    const { val, handleAdd, handleCancle } = props;

    return (
        <div className="product-card">
            <div className="product-card__item">
                <div className="item">
                    <img src={val.img} alt={val.name} />
                    <div className="caption">
                        <h3>{val.name}</h3>
                        <div className="footer_caption">
                            <div className="product_price">
                                {val.price} USD
                            </div>
                            <div className="product_btn">
                                {val.clicked === false ? <button onClick={() => handleAdd(val)} className="Add">Add to Cart</button> : <button onClick={() => handleCancle(val)} className="Remove">Remove</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;