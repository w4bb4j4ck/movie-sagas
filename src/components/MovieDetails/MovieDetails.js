import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import EditModal from '../EditModal/EditModal';
import Button from '@material-ui/core/Button';

class MovieDetails extends Component {

  render() {
    return (
      <>
        {this.props.details.map((element) =>
          <div>
            <img src={element.poster} />
            <h2>{element.title}</h2>
            <h5>{element.name}</h5>
            <p>{element.description}</p>
            <Link to="/">
            <Button variant="outlined" color="primary">BACK</Button>
            </Link>
            <EditModal />
          </div>)}
      </>
    );
  }
}

const putStateOnProps = (reduxStore) => ({
  details: reduxStore.details
})

export default connect(putStateOnProps)(MovieDetails);
