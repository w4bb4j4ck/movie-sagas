import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({type:'FETCH_MOVIES'});
    }

  render() {
    return (
      <div>
          {JSON.stringify(this.props.movies)}
      </div>
    );
  }
}

const putStateOnRedux = (reduxStore) => ({
    movies: reduxStore.movies,
})

export default connect(putStateOnRedux)(MovieList);
