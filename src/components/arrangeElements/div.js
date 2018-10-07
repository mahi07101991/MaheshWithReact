import React, { Component } from 'react'
import './div.css'
export default class div1 extends Component {
  render() {
    return (
      <div  className={`item order${this.props.order}`}  style={{ order: this.props.order, height:this.props.height}}>
      {this.props.order}
      </div>
    )
  }
}
