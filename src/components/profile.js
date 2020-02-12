 import React from 'react';

const Profile = () =>{
    return(
        <div className="profile">
                 <div className="title">Sauces</div>
               <ul className="randomImg-list">
                        <li>
                            <h2>Sriracha</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/32.jpg')} />
                        </li> 
                        <li>
                            <h2>Frank's Red Hot Original Sauce</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/24.jpg')} />
                        </li>
                        <li>
                            <h2>Tapatio</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/26.jpg')} />
                        </li>
                        <li>
                            <h2>El Yucateco</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/27.jpg')} />
                        </li>
                        <li>
                            <h2>Tabasco</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/28.jpg')} />
                        </li>
                        <li>
                            <h2>Cholula</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/29.jpg')} />
                        </li>

                        <li>
                            <h2>Valentina</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/36.png')} />
                        </li>
                     
                        <li>
                            <h2>Mad Dog 357</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/31.jpg')} />
                        </li>
                        <li>
                            <h2>Heinz Tomato Ketchup</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/30.jpg')} />
                        </li>
                        <li>
                            <h2>Heinz Yellow Mustard</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/25.jpg')} />
                        </li>
                        <li>
                            <h2>Heinz Barbecue Sauce</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/33.jpg')} />
                        </li>
                </ul>
        </div>
    )
}

export default Profile;