import React from 'react'
import {useGlopalContext} from "./context";
import {FaShoppingBag} from "react-icons/fa";
function Navbar() {

    const {amount}=useGlopalContext();

    return (
        <nav className="navbar">
            <div className="nav-center">
                <h3 className="nav-logo">use reducer</h3>
                <div className="nav-icon" amount={amount}>
                    <FaShoppingBag />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
