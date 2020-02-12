import React from 'react';

const Posts = (props) =>{
    return(
        <div className="posts">
               <div className="title">Drinks</div>
               <ul className="randomImg-list">
                        <li>
                            <Testing heading="Dr Pepper" price="5" imgSrc={require('../images/articles/8.jpg')} imgClick={props.onImgClick}/>
                        </li> 
                        <li>
                          
                            <Testing heading="Sprite" price="5" imgSrc={require('../images/articles/9.jpg')} imgClick={props.onImgClick}/>
                        </li>
                        <li>
                       
                            <Testing heading="Schweppes Bitter Lemon" price="5" imgSrc={require('../images/articles/10.jpg')} imgClick={props.onImgClick}/>
                        </li>
                        <li>
                        
                            <Testing heading="Baikal" price="5" imgSrc={require('../images/articles/11.jpg')} imgClick={props.onImgClick}/>
                        </li>
                        <li>
                           
                            <Testing heading="Minute Maid" price="5" imgSrc={require('../images/articles/14.png')} imgClick={props.onImgClick}/>
                        </li>
                        <li>
                          
                            <Testing heading="Mohito" price="5" imgSrc={require('../images/articles/34.jpg')} imgClick={props.onImgClick}/>
                        </li>
                        <li>
                            <Testing heading="Minttu" price="5" imgSrc={require('../images/articles/12.jpg')} imgClick={props.onImgClick}/>
                        </li>
                        <li>
                            <Testing heading="Vana Tallin Cream" price="5" imgSrc={require('../images/articles/13.png')} imgClick={props.onImgClick}/>
                        </li>
                      
                </ul>
        </div>
    );
};

const Testing = (props) =>{
    return(
        <div>
            <h2>{props.heading}</h2>
            <img className="randomImg" alt="" src={props.imgSrc} onClick={ () => props.imgClick(props.imgSrc, props.heading, props.price) } />
        </div>
    )
};

export default Posts;