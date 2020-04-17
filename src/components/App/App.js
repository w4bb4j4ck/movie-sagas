import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Route exact path='/' component={MovieList}/>
          <Route path='/details' component={MovieDetails}/>
          <Route path='/edit' component={MovieEdit}/>
        </Router>
      </div>
    );
  }
}

export default App;
