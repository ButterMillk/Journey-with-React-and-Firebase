import React, { Component } from 'react';
import './App.css';
import Journey from './Journey/Journey.jsx';
import Footer from './Components/Footer.jsx';

class App extends Component {

  render(){
    return (
      <div className="App">
          <div className="navigationWrapper">
            <h1>Imagine Travel</h1>
          </div>
          <Journey />
          <Footer />
      </div>
    );
  }
}

export default App;
