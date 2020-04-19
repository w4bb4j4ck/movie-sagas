import React, {Component} from 'react';

class TrendingItem extends Component {
    render(){
        return(
            <>
            <h1>{this.props.title}</h1>
            <video width="854" height="480" controls>
            <source src={this.props.video} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
            </>
        )
    }
}

export default TrendingItem;