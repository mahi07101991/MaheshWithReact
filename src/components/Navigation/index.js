import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Mahesh</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a onClick={()=>{this.props.history.push('/dashboard/home')}}>Home</a></li>
            <li><a onClick={()=>{this.props.history.push('/dashboard/expandcollapse')}}>Expand and Collapse</a></li>
          </ul>
          
        </div>
      </nav>
    )
  }
}
