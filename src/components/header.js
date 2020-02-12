import React from 'react';


const Header = (props) => {
   return (
    <div className="header">
                    <div><h1>Best foods</h1></div>
                         
                    <div></div>
                  
                     <div><button className="bg-btn" onClick={props.doWhatever}>{props.title}</button></div>

                    <div className="cart-container" onClick={props.openMenu}>
                        <img className="cart-img" alt=""  src={require('../images/logos/cart.jpg')}/>
                        <span className="cart-name">Cart</span>
                        <span className="cart-order-amount">{props.orderAmount}</span>
                    </div>
    </div>
   )
}


export default Header;