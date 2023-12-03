import React from 'react'
import './style.css'
import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'

const NavBar = () => {
  return (
    <div className="nar-bar">
        <div className="logo">
         <img src={ logo } alt=''/>
         <p>Shopper</p>
        </div>
       <ul className="nav-menu">
        <li>Shop<hr/></li>
        <li>Men</li>
        <li>Woman</li>
        <li>Kids</li>
       </ul>
       <div className="nav-login-cart">
        <button>login</button>
        <img src={ cart_icon } alt=''/>
        <div className="nav-cart-count">0 </div>
       </div>
    </div>
  )
}

export default NavBar