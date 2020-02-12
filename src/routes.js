import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// npm install react-router-dom
import Home from './components/home';
import Drinks from './components/posts';
import Sauces from './components/profile';
import About from './components/about';
import Header from './components/header';

import './css/styles.css'

class Routes extends Component {

    constructor(props){
        super(props);

        this.state = {
               addClass: true,
               title: 'Dark',
               boxClass:["wrapper"],
               open: false,
               orderTotal: 0,
               orderPrices:[],
               data:[],
               remove: false      
        };
        
        this.addOrder = this.addOrder.bind(this);
        this.openMenu = this.openMenu.bind(this);
        
    }

    /*
            displayData: this.state.displayData.concat(imgSrc),
            displayHeading: this.state.displayHeading.concat(heading),
            displayPrice: this.state.displayPrice.concat(price)
  
               data: this.state.data.push({imgSrc:imgSrc, heading:heading, price:price})
    */ 

    
addOrder = (imgSrc1, heading1, price1) => {

    this.setState({
      data:this.state.data.concat(
          {
            imgSrc:imgSrc1,
            heading:heading1,
            price:price1
          }
       )          
      },()=>this.orderTotal(price1));
     
  }
// console.log(this.state.data)

    /*
    orderTotal(price1){
       
        this.setState((prevState) => ({
            orderTotal: parseFloat(prevState.orderTotal) + parseFloat(price1)
        })); 

    }
    */

    orderTotal = (price) => {
        //console.log(price)
    
            this.setState({
                orderTotal: this.state.data.reduce((a, b) => ({price: a.price + b.price}))
            }); 
         
            // arr.reduce((a, b) => ({x: a.x + b.x}));
            //this.state.data.map(x=> parseFloat(x.price) + parseFloat(this.state.orderTotal))
    }

    calculateTotal() {
        return this.state.data.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.price), 0);    
    }



    changeTheWorld = (color) => {
        this.setState({
            addClass: !this.state.addClass,
        });

        if(this.state.addClass) {
            this.state.boxClass.push('testing');  
            document.body.style.backgroundColor = '#3a3939';
            this.setState({
                title: 'white'
            })
        }else{
            this.state.boxClass.pop(); 
            document.body.style.backgroundColor = '#e8e8e8';
            this.setState({
                title: 'black'
            })
        }
    };
    
    openMenu = () => {
        this.setState({
            open: !this.state.open
        });
    };


    removeOrder = (index) => {
        this.setState({
            data: this.state.data.filter(function(order, i) { 
                return i !== index 
            })
        });
    this.removePrice(index) 
    };



   
    removePrice(index){
     
        this.setState((prevState) => ({
            orderTotal: parseFloat(prevState.orderTotal) - parseFloat(this.state.data[index].price)
        })); 
    }
    


  

    render(){
        //console.log(this.state.data);
        return(
            <div className={this.state.boxClass.join(' ')}>

                <Header doWhatever={this.changeTheWorld.bind(this, 'White')} openMenu={this.openMenu} title={this.state.title} orderAmount={this.state.data.length} />

                <section>

                {this.state.open ?
                  
                    <div className="orderMenu">
                        <div className="inner-container">
                            <h2 className="orderMenu-title">Your orders</h2>

                            {this.state.data.map( (data, index) =>
                             
                                    <div className="clearfix" key={index}>
                                        <div className="orderMenu-left">
                                            <img key={index} className="randomImg2" alt="" src={data.imgSrc} />
                                        
                                        </div>
                                        <ul className="orderMenu-right">
                                            <li>
                                                <p>{data.heading}</p>
                                            </li>
                                            <li>
                                                <p>Price: {data.price} &euro;</p>
                                            </li>
                                            <li><button className="remove-btn" onClick={this.removeOrder.bind(this, index)}> Remove</button></li>
                                            {/*<button onClick={this.removeOrder.bind(this, 'Awsome Techsith')}>Change Using Bind</button>*/}
                                        </ul>
                                  
                                    </div>
                         

                            )}
                        </div>   
                        <div className="bottom">
                         
                                <div className="order-container">
                                    <button className="order-btn" >Order</button>
                                </div>
                                <div className="order-total-container">
                                    Order total: {this.calculateTotal()} &euro; 
                                </div>
                           
                        </div>
                    </div>
            
                :
                   ""
                } {/* orderMenu end*/}

                    <div className="header2">
                        <Link to="/">
                            <div className="list">FOODS</div>
                        </Link>

                        <Link to="/drinks">
                            <div className="list">DRINKS</div>
                        </Link>

                        <Link to="/sauces">
                            <div className="list">SAUCES</div>
                        </Link>

                        <Link to="/other">
                            <div className="list">OTHER</div>
                        </Link>
                    </div>

                      {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}

                    <Switch>
                        <Route path="/" exact render={(props) => <Home {...props} onImgClick={this.addOrder} />} /> 

                        <Route path="/drinks" exact render={(props) => <Drinks {...props} onImgClick={this.addOrder} />} />
                        {/*<Route path="/drinks" component={Drinks}/>*/}

                        <Route path="/sauces" exact component={Sauces}/>
                        <Route path="/other" exact component={About}/>

                    </Switch>

                </section> 

            </div>
        );
    };
}

export default Routes;
