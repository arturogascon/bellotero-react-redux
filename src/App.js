import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Navbar from './components/navbar.component';
import Testimonial from './components/testimonial.component';
import Configurator from './components/configurator.component';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Route exact path="/" component={Testimonial} />
        <Route path="/configurator" component={Configurator} />
      </div>
    </BrowserRouter>
  );
}

export default App;
