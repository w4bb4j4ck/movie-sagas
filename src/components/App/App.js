import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header/>
        <MovieList />
      </div>
    );
  }
}

export default App;
