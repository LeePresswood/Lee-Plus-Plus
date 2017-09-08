import React from 'react';
import { connect } from 'react-redux'
import { fetchPostAction } from '../actions/PostRequestActions'
import '../styles/PostTitleBox.css';

const PostTitleBox = props => (
    <div className="PostTitleBox">
        {/*<h1 className="title">Java Development Tutorial: Part 3</h1>*/}
        <h1 className="title" onClick={props.loadPost}>{props.title}</h1>
        <h2 className="subtitle">The Garbage Collector</h2>
        <h5 className="date-time">08/27/2017</h5>
    </div>
);

const mapStateToProps = state => ({
    title : state.postRequestReducer.title
});

const mapDispatchToProps = dispatch =>{
    return {
        loadPost : () => dispatch(fetchPostAction()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostTitleBox)
