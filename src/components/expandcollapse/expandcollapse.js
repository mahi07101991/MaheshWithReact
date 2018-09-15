import React, { Component } from 'react'
import Row from './row';
export default class expandcollapse extends Component {
    constructor(props){
        super(props);
        this.state = {
          collapse: false,
          count1: {
            name: 'count1',
            count: 0
          } 
        }
        
      }

      setCount = (value)=>{
        debugger
        this.setState({
          count1: {
            name: 'count1',
            count: value ? this.state.count1.count + 1 : this.state.count1.count - 1
          }
        })
      }
      setCountTo2 = ()=>{
        debugger
        this.setState({count1:{name:'count1',count:10}})
      }
      setCountTo1 = ()=>{
        debugger
        this.setState({count1:{name:'count1',count:0}})
      }
  render() {
    return (
     <div>
       {this.state.count1.count >= 0 && this.state.count1.count < 10  &&
       <button type="button" class="btn btn-primary" onClick={this.setCountTo2}>Expand All</button>
       }
       {this.state.count1.count  >= 10 &&
      <button type="button" class="btn btn-success" onClick={ this.setCountTo1}>Collapse All</button>
       }
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       <Row setCount={this.setCount} count={this.state.count1}/>
       
     </div>
    )
  }
}
