import React, { Component } from 'react'
import './div.css'
export default class div1 extends Component {
  render() {
    return (
      <div 
      className="item" 
      style={{ order: this.props.order, color:window.innerWidth > 980 ? 'black':'',height:this.props.height}}>
      {this.props.number}
      </div>
    )
  }
}
