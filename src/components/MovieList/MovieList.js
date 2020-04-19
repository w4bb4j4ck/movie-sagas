import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem'

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({type:'FETCH_MOVIES'});
    }

  render() {
    return (
      <div className="main">
          {this.props.movies.map((movie) => 
          <MovieItem movie={movie} key={movie.id}/>)}
      </div>
    );
  }
}

const putStateOnRedux = (reduxStore) => ({
    movies: reduxStore.movies,
})

export default connect(putStateOnRedux)(MovieList);
