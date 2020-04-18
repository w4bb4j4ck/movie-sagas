import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieList.css';
import {Link} from 'react-router-dom';

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({type:'FETCH_MOVIES'});
    }

    handleClick = (id) => () => {
      this.props.dispatch({type: 'FETCH_DETAILS', payload: id})
    }

  render() {
    return (
      <div>
          {this.props.movies.map((movie) => 
          <div className="element">
            <Link to='/details'>
              <img onClick={this.handleClick(movie.id)} src={movie.poster} alt={movie.title} />
            </Link>
              <div>
                <Link to='/details'>
                  <h2 onClick={this.handleClick(movie.id)}>{movie.title}</h2>
                </Link>
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
