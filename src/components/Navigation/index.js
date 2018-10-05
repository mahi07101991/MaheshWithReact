import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props);
  }
  getActive = (path)=>{
    return this.props.location.pathname == path ? "active" : ""
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Mahesh</a>
          </div>
          <ul className="nav navbar-nav">
            <li className={ this.getActive('/dashboard/home')}><a onClick={()=>{this.props.history.push('/dashboard/home')}}>Home</a></li>
            <li className={ this.getActive('/dashboard/expandcollapse')}><a onClick={()=>{this.props.history.push('/dashboard/expandcollapse')}}>Expand and Collapse</a></li>
            <li className={ this.getActive('/dashboard/googleMaps')}><a onClick={()=>{this.props.history.push('/dashboard/googleMaps')}}>Google Maps</a></li>
            <li className={ this.getActive('/dashboard/subnav')}><a onClick={()=>{this.props.history.push('/dashboard/subnav')}}>SubNav</a></li>
            <li className={ this.getActive('/dashboard/arrange-elements')}><a onClick={()=>{this.props.history.push('/dashboard/arrange-elements')}}>Arrange Elements</a></li>
          </ul>
          
        </div>
      </nav>
    )
  }
}
