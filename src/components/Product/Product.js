import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({product, handleAddToCart}) => {
    // const handleAddToCart = () => {
    //     console.log(props.product)
    // }
    // console.log(props.product)

    // const {product, handleAddToCart} = props;

    // const {name, img, seller, price, ratings} = props.product;
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
                
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add To Cart </p>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;