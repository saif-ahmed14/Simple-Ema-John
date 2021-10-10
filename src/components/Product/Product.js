import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {

    const { name, price, seller, stock, img, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p><small>Seller: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <Rating
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color">
                </Rating>
                <br />
                <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="cart-btn">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;