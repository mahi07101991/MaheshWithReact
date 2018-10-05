import React, { Component } from 'react'
import Div from './div';
import './div.css'
export default class arrangeElements extends Component {
    constructor(props){
        super(props);
        this.state= {
            order1: 1,
            order2: 2,
            order3: 3,
            order4: 4,
            order5: 5,
            order6: 6,
            order7: 7,
            order8: 8,
            order9: 9
        }
    }

    
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    
    updateDimensions=()=>{
        console.log(this.state.order3)
        if(window.innerWidth < 980)
        {
            this.setState({
                order1: 1,
                order2: 2,
                order3: 3,
                order4: 4,
                order5: 5,
                order6: 6,
                order7: 7,
                order8: 8,
                order9: 9 
            })
        }  else{
            this.setState({
                order1: 1,
                order2: 2,
                order3: 3,
                order4: 4,
                order5: 5,
                order6: 6,
                order7: 7,
                order8: 8,
                order9: 9
            })
        }  
    }
   render() {
    return (
        <React.Fragment>
        <div>
        <h1 id="demo"></h1>
        </div>
        
        <br />
        <br />
      <div>
      <div className="container1">
            <Div height={'160px'} order={this.state.order1}  number={1}/>
            <Div height={'150px'} order={this.state.order2} number={2}/>
            <Div height={'190px'} order={this.state.order3} number={3}/>
     
            <Div height={'250px'} order={this.state.order4} number={4}/>
            <Div height={'300px'} order={this.state.order5} number={5}/>
            <Div height={'270px'} order={this.state.order6} number={6}/>
          
            <Div height={'360px'} order={this.state.order7} number={7}/>
            <Div height={'490px'} order={this.state.order8} number={8}/>
            <Div height={'310px'} order={this.state.order9} number={9}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
