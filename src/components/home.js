import React from 'react';

const Home = (props) => {

    return(
        <div>
            <div className="title">Foods</div>

            <ul className="randomImg-list">
               <li>
                    <Testing heading="BabyBack ribs" price="5" imgSrc={require('../images/articles/2.jpg')} imgClick={props.onImgClick}/>
                </li> 
                <li>
                    <Testing heading="Kentucky fried chicken" price="4" imgSrc={require('../images/articles/3.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Mozarella pizza" price="6" imgSrc={require('../images/articles/4.png')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Beefy Macho Griller" price="2.5" imgSrc={require('../images/articles/1.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Beefy Fritos" price="2.5" imgSrc={require('../images/articles/7.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Beef jerky" price="1" imgSrc={require('../images/articles/6.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Veal steak" price="9" imgSrc={require('../images/articles/15.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Cresent Dogs" price="3" imgSrc={require('../images/articles/35.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="South American hot dogs" price="3" imgSrc={require('../images/articles/37.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Shashlik" price="1" imgSrc={require('../images/articles/40.jpg')} imgClick={props.onImgClick}/>
                </li>
                <li>
                    <Testing heading="Double cheese burger" price="1" imgSrc={require('../images/articles/5.png')} imgClick={props.onImgClick}/>
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

export default Home;