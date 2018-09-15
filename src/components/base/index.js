import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import Navigation from '../Navigation/index';
import Home from '../home/index';
import ExpandCollapse from '../expandcollapse/expandcollapse';

export default class index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
      <Navigation {...this.props}/>
      <div className="container" style={{marginTop: '70px'}}>
        <Route path="/dashboard/home" component={Home} {...this.props}/>
        <Route path="/dashboard/expandcollapse" component={ExpandCollapse} {...this.props}/>
      </div>
    </div>
    )
  }
}
