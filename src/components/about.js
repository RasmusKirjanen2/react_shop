import React from 'react';

const About = () =>{
    return(
        <div className="about">
             <div className="title">Other</div>
               <ul className="randomImg-list">
                        <li>
                            <h2>Tyrkisk Peber original</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/16.jpg')} />
                        </li> 
                        <li>
                            <h2>Tyrkisk Peber Hot&Sour</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/17.jpg')} />
                        </li>
                        <li>
                            <h2>Tyrkisk Peber Hot Stones</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/18.jpg')} />
                        </li>
                        <li>
                            <h2>Tyrkisk Peber Firewood</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/19.jpg')} />
                        </li>
                        <li>
                            <h2>Pringles Sour Cream & Onion</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/20.jpg')} />
                        </li>
                        <li>
                            <h2>Pringles Salt & Vinegar</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/21.jpg')} />
                        </li>
                        <li>
                            <h2>Doritos Nacho Cheese</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/22.jpg')} />
                        </li>
                        <li>
                            <h2>Pistachios Roasted Salted</h2>
                            <img className="randomImg" alt=""  src={require('../images/articles/23.jpg')} />
                        </li>
                      
                </ul>
        </div>
           
      
    )
}

export default About;