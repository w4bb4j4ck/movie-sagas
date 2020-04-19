import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {

    handleClick = (id) => () => {
        this.props.dispatch({type: 'FETCH_DETAILS', payload: id})
    }

    render(){
        return(
            <>
            <div className="element">
                <Link to='/details'>
                    <img onClick={this.handleClick(this.props.movie.id)} src={this.props.movie.poster}
                    alt={this.props.movie.title} />
                </Link>
                <div>
                    <Link to='/details'>
                        <h2 onClick={this.handleClick(this.props.movie.id)}>{this.props.movie.title}</h2>
                    </Link>
                    <p>{this.props.movie.description}</p>
                </div>
            </div>
            </>
        )
    }
}

export default connect()(MovieItem);