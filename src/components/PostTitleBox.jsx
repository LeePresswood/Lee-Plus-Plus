import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/PostTitleBox.css';

class PostTitleBox extends Component{
    render(){
        return (
            <div className="PostTitleBox">
                {/*<h1 className="title">Java Development Tutorial: Part 3</h1>*/}
                <h1 className="title">{this.props.title}</h1>
                <h2 className="subtitle">The Garbage Collector</h2>
                <h5 className="date-time">08/27/2017</h5>
            </div>
        );
    }
}

PostTitleBox.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    dateTime: PropTypes.string
};

export default PostTitleBox;
