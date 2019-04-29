import React, { Component } from 'react';
import './App.css';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
import Journey from './Journey/Journey.jsx';
//import NewJourney from './Journey/NewJourney.jsx';
//import JourneyDetails from './Journey/JourneyDetails.jsx';
//import Navigation from './Components/Navigation.jsx';
//import Autor from './Components/Autor.jsx';
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
