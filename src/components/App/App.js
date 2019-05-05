import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';

import './App.css';

export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Route exact path={'/'} component={Landing}/>
          <Route exact path={'/dashboard'} component={Dashboard}/>
        </BrowserRouter>
      </div>
      )
    };
}
