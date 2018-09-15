import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MasterComponent from './components/Pages/master/index';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={MasterComponent}/>
      </BrowserRouter>
    );
  }
}

export default App;
