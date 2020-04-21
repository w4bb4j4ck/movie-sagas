import React, {Component} from 'react';
import './TrendingItem.css';

class TrendingItem extends Component {
    render(){
        return(
            <>
            {this.props.trending && 
            <div>
                <div id="trending-header">
                    <h1>{this.props.trending.title}</h1>
                </div>
            <video width="854" height="480" controls>
            <source src={this.props.trending.video} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
            </div>}
            </>
        )
    }
}

export default TrendingItem;