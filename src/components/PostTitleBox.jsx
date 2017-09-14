import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/PostTitleBox.css';

class PostTitleBox extends Component {
    render(){
        return (
            <div className="PostTitleBox">
                <p className="category-title">{this.props.title}</p>
                <p className="category-subtitle">{this.props.subtitle}</p>
            </div>
        );
    }
}

PostTitleBox.propTypes = {
    title : PropTypes.string,
    subtitle : PropTypes.string,
    dateTime : PropTypes.string
};

export default PostTitleBox;
