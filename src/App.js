import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Teams from './pages/Teams'
import PrivacyPolicy from './pages/PrivacyPolicy'
import SingleProject from './pages/SingleProject'
import TnC from './pages/TnC'

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
      <Route exact path='/about' component={AboutUs} />
      <Route exact path='/privacy' component={PrivacyPolicy} />
      <Route exact path='/teams' component={Teams} />
      <Route exact path='/tnc' component={TnC} />
      <Route exact path='/property/:slug' component={SingleProject} />
      <Route path='/' component={Error} />
    </Switch>
    <Footer />
  </>
  );
}

export default App;
