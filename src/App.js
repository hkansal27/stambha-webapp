import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home'
import Teams from './pages/Teams'
import SingleProject from './pages/SingleProject'

import Error from './pages/Error'

// components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/teams' component={Teams} />
      <Route exact path='/property/:slug' component={SingleProject} />
      <Route path='/' component={Error} />
    </Switch>
    <Footer />
  </>
  );
}

export default App;
