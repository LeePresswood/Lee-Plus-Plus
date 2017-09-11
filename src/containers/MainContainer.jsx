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
                    <PostTitleBox title={this.props.title} subtitle={this.props.subtitle} dateTime={this.props.dateTime}/>
                    <PostContentBox body={this.props.body}/>
                </div>
                <div className="about-me-column box-with-shadow">
                
                </div>
            </div>
        );
    }
}

MainContainer.propTypes = {
    title : PropTypes.string,
    subtitle : PropTypes.string,
    dateTime : PropTypes.string,
    body : PropTypes.array,
    loading : PropTypes.bool
};

const mapStateToProps = state => ({
    title : state.postRequestReducer.title,
    subtitle : state.postRequestReducer.subtitle,
    dateTime : state.postRequestReducer.dateTime,
    body : state.postRequestReducer.body,
    loading : state.postRequestReducer.loading,
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