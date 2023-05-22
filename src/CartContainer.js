import React from 'react'
import {useGlopalContext} from "./context";
import List from "./List";

function CartContainer() {

    const {cart,total,clearCart}=useGlopalContext();

    if(cart.length === 0)
    {
        return <section className="cart-container">
        <header>
            <h2 className="cart-title">your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
        </header>
        </section>
    }
    return (
        <section className="cart-container">
            <header>
                <h2 className="cart-title">your bag</h2>
            </header>
            <List />
            <footer className="footer-cart">
                <hr/>
                <div className="cart-total">
                    <h4>
                        Total
                        <span>${total}</span>
                    </h4>
                </div>
                <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
