import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import '../styles/MainContainer.css';
import PostTitleBox from "../components/PostTitleBox";
import { fetchPostAction } from '../actions/PostRequestActions'
import PostContentBox from "../components/PostContentBox";

class MainContainer extends Component {
    componentWillMount(){
        this.props.loadPost()
    }
    
    render(){
        return (
            <div className="MainContainer">
                <div className="blog-column box-with-shadow">
                    {this.mapPostBoxToLoadedPosts()}
                </div>
                <div className="about-me-column box-with-shadow">
                
                </div>
            </div>
        );
    }
    
    mapPostBoxToLoadedPosts(){
        return this.props.loadedPosts.map((post, index) => {
            return <div key={index}>
                <PostTitleBox title={post.title} subtitle={post.subtitle} dateTime={post.dateTime}/>
                <PostContentBox body={post.body}/>
            </div>
        });
    }
}

MainContainer.propTypes = {
    title : PropTypes.string,
    subtitle : PropTypes.string,
    dateTime : PropTypes.string,
    body : PropTypes.array,
    loading : PropTypes.bool,
    loadedPosts : PropTypes.array,
};

const mapStateToProps = state => ({
    title : state.postRequestReducer.title,
    subtitle : state.postRequestReducer.subtitle,
    dateTime : state.postRequestReducer.dateTime,
    body : state.postRequestReducer.body,
    loading : state.postRequestReducer.loading,
    loadedPosts : state.postRequestReducer.loadedPosts,
});

const mapDispatchToProps = dispatch =>{
    return {
        loadPost : () => dispatch(fetchPostAction()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer)