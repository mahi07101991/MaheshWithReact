import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BaseComponent from '../../base/index';
import Welcome from './welcome';

export default class index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Welcome} />
        <Route path="/dashboard" component={BaseComponent}/>        
      </Switch>
    )
  }
}
