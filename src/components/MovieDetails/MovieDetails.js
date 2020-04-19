import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import EditModal from '../EditModal/EditModal';
import Button from '@material-ui/core/Button';

class MovieDetails extends Component {

  handleBack = () => {
    this.props.dispatch({type: 'CLEAR_DETAILS'});
  }

  render() {
    return (
      <div className="main">
        {this.props.details.map((element) =>
          <div key={element.title}>
            <img src={element.poster} alt={element.title} />
            <h2>{element.title}</h2>
            <h5>{element.name}</h5>
            <p>{element.description}</p>
            <Link to="/">
            <Button onClick={this.handleBack} variant="outlined" color="primary">BACK</Button>
            </Link>
            <EditModal />
          </div>)}
      </div>
    );
  }
}

const putStateOnProps = (reduxStore) => ({
  details: reduxStore.details
})

export default connect(putStateOnProps)(MovieDetails);
