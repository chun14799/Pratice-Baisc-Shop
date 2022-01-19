import React, { useState } from 'react';
import './card.scss';


const Card = () => {
    const [card, setCard] = useState([
        {
            id: 1,
            name: 'Iphone',
            price: '1499 USD',
            img: 'https://hc.com.vn/i/ecommerce/media/GS.006049_FEATURE_70846.jpg'
        },
        {
            id: 2,
            name: 'Ipad',
            price: '999 USD',
            img: 'https://tieudung.vn/upload_images/images/2020/05/18/IP.jpg'
        },
        {
            id: 3,
            name: 'Airpods',
            price: '149 USD',
            img: 'https://didongviet.vn/pub/media/catalog/product/t/a/tai-nghe-bluetooth-apple-airpods-2-no-wireless-charge-vn-a.png'
        },
        {
            id: 4,
            name: 'Macbook',
            price: '2899 USD',
            img: 'https://cdn.tgdd.vn/Files/2020/12/21/1315201/macbook10_800x450.jpg'
        },
        {
            id: 5,
            name: 'App Watch',
            price: '399 USD',
            img: 'https://cdn.tgdd.vn/Products/Images/7077/234917/apple-watch-s6-lte-40mm-vien-thep-day-cao-su-den-thumb-600x600.jpg'
        },
        {
            id: 6,
            name: 'Magic Keyboard',
            price: '399 USD',
            img: 'https://cdn.tgdd.vn/Files/2020/04/20/1250578/magic-keyboard-for-ipad-pro_800x450.jpg'
        },
    ])
    return (
        <ul className="product-card">
            {card.map((val) => (
                <li className="product-card__item" key={val.id}>
                    <div className="item">
                        <img src={val.img} alt={val.name} />
                        <div className="caption">
                            <h3>{val.name}</h3>
                            <div className="footer_caption">
                                <div className="product_price">
                                    {val.price}
                                </div>
                                <div className="product_btn">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Card;