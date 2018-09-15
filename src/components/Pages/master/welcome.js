import React, { Component } from 'react'

export default class welcome extends Component {
  render() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h1>Bootstrap Tutorial</h1> 
            <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
            responsive, mobile-first projects on the web.</p> 
          </div>
          <button type="button" class="btn btn-warning">Go <span className="btn btn-success" onClick={()=>{this.props.history.push('/dashboard')}}>DASHBOARD</span></button>
       </div>
    )
  }
}
