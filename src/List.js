import React from 'react'
import {FaAngleUp,FaAngleDown} from "react-icons/fa"
import {useGlopalContext} from "./context";

function List() {
    const {cart,removeItem,increaseItem,decreaseItem}=useGlopalContext();
    return (  
        <>          
            {
            cart.map(item=>{
                const {id,title,price,img,amount}=item
            return <article className="cart-item" key={id}>
                <div className="info-item">
                    <img className="img-item" src={img} alt={title}/>
                    <div>
                    <h4 className="item-name">{title}</h4>
                    <h4 className="item-price">${price}</h4>
                    <button className="remove-item-btn" onClick={()=>removeItem(id)}>remove</button>
                    </div>
                </div>
                <div className="amount-container">
                    <button className="increase-amount-btn" onClick={()=>increaseItem(id)}>
                        <FaAngleUp />
                    </button>
                        <p className="amount-item">{amount}</p>
                    <button className="decrease-amount-btn" onClick={()=>decreaseItem(id)}>
                        <FaAngleDown />
                    </button>
                </div>
            </article>
            })}
    </>
    )
}

export default List
