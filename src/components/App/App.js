import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';
import {HashRouter as Router, Route} from 'react-router-dom';
import TrendingItem from '../TrendingItem/TrendingItem';
import { connect } from 'react-redux';

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
          <Route path='/best-movie' render={(props) => <TrendingItem {...props} trending={this.props.trending[0]} />} />
          <Route path='/top-show' render={(props) => <TrendingItem {...props} trending={this.props.trending[1]} />} />
          <Route path='/coming-soon' render={(props) => <TrendingItem {...props} trending={this.props.trending[2]} />} />
        </Router>
      </div>
    );
  }
}

const putStateOnProps = (reduxStore) => ({
  trending: reduxStore.trending
})

export default connect(putStateOnProps)(App);
