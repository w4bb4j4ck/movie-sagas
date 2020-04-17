import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header>
                <div className="main-head">
                    <h3>Rotten Plumbus</h3>
                </div>
                <div className="secondary-head">
                    <p>Trending on RP</p><a>Best Movie 2020</a><a>Top Interdimensional Netflix Show</a>
                </div>
            </header>
        )
    }
}

export default Header;