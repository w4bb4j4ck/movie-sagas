import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import EditModal from '../EditModal/EditModal';
import Button from '@material-ui/core/Button';
import './MovieDetails.css';

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
            <div id="details-description">
              <p>{element.description}</p>
            </div>
            <Link to="/">
              <div id="back-btn">
                <Button onClick={this.handleBack} variant="contained" size="large" color="primary">BACK</Button>
              </div>
            </Link>
            <div>
              <EditModal />
            </div>
          </div>)}
      </div>
    );
  }
}

const putStateOnProps = (reduxStore) => ({
  details: reduxStore.details
})

export default connect(putStateOnProps)(MovieDetails);
