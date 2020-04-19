import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header>
                <div className="main-head">
                    <Link to='/'>
                    <img src="/images/plumbus1.png" height="60" width="50" alt="plumbus" /><h1>Rotten Plumbus</h1>
                    </Link>
                </div>
                <div className="secondary-head">
                    <p id="trending-title">Trending on RP:</p>
                    <Link to='/best-movie'>
                    <p>Best Movie 2020</p>
                    </Link>
                    <Link to='/top-show'>
                    <p>Top Interdimensional Netflix Show</p>
                    </Link>
                    <Link to='/coming-soon'>
                    <p>Coming Soon</p>
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header;