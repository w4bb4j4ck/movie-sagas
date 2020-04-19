import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

class Header extends Component {
    render(){
        return(
            <header>
                <div className="main-head">
                    <Link to='/'>
                        <div id="logo">
                            <img src="/images/plumbus1.png" height="75" width="60" alt="plumbus" /><h1>Rotten Plumbus</h1>
                        </div>
                    </Link>
                    <div id="search">
                        <SearchBar />
                    </div>
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