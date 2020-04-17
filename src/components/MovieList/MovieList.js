import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieList.css';

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({type:'FETCH_MOVIES'});
    }

  render() {
    return (
      <div>
          {this.props.movies.map((movie) => 
          <div className="element">
              <img src={movie.poster}/>
              <div>
                  <h2>{movie.title}</h2>
                  <p>{movie.description}</p>
              </div>
          </div>)}
      </div>
    );
  }
}

const putStateOnRedux = (reduxStore) => ({
    movies: reduxStore.movies,
})

export default connect(putStateOnRedux)(MovieList);
