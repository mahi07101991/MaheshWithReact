import React, { Component } from 'react'
import { Route } from 'react-router'
import Navigation from '../Navigation/index';
import Home from '../home/index';
import ExpandCollapse from '../expandcollapse/expandcollapse';
import GoogleMaps from '../googlemaps/index';
import SubNav from '../SubNav/subnav';
import ArrangeElements from '../arrangeElements/arrange-elements';

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
        <Route path="/dashboard/googleMaps" component={GoogleMaps} {...this.props}/>
        <Route path="/dashboard/subnav" component={SubNav} {...this.props}/>
        <Route path="/dashboard/arrange-elements" component={ArrangeElements} {...this.props}/>
      </div>
    </div>
    )
  }
}
