import React from "react";
import './Cart.css';


type CartProps = {
    totQuantity: number,
    price: number;
}


const Cart = ({totQuantity, price}: CartProps) => {
    
    return(
        <div className="container_cart_quantity">
        <div className={totQuantity === 0 ? "hidden" : ""}>{`${price.toFixed(2)}€`}</div>
        <div className="cart-container">
            <img className="cart" src="cart.png" alt="Cart"></img>
        </div>
        <div className={`cart-container_tot ${totQuantity === 0 ? "hidden" : ""}`}>{totQuantity === 0 ? "" : totQuantity}</div>
        </div>
    )
};

export default Cart;