import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';
import {HashRouter as Router, Route} from 'react-router-dom';
import TrendingItem from '../TrendingItem/TrendingItem';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path='/' component={MovieList}/>
          <Route path='/details' component={MovieDetails}/>
          <Route path='/edit' component={MovieEdit}/>
          <Route path='/best-movie' component={() => <TrendingItem />} />
          <Route path='/top-show' component={() => <TrendingItem />} />
          <Route path='/coming-soon' component={() => <TrendingItem />} />
        </Router>
      </div>
    );
  }
}

export default App;
