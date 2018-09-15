import React, { Component } from 'react'
import Row from './row';
export default class expandcollapse extends Component {
    constructor(props){
        super(props);
        this.state = {
          collapse: false,
          expand: true
        }
      }
      setExpand = ()=>{
        this.setState({collapse:true,expand:false})
      }
      setCollapse = ()=>{
        this.setState({collapse:false,expand:true})
      }
  render() {
    return (
     <div>
       <button type="button" class="btn btn-primary" onClick={()=>{this.setExpand()}}>Expand</button>
      <button type="button" class="btn btn-success" onClick={()=>{this.setCollapse()}}>Collapse</button>
       <Row collapse={this.state.collapse} expand={this.state.expand}/>
       <Row collapse={this.state.collapse} expand={this.state.expand}/>
       <p>{this.state.collapse?"Expanded": "Collapsed"}</p>
     </div>
    )
  }
}
