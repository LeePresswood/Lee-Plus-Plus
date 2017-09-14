import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchSinglePostAction } from '../actions/PostRequestActions'
import PostTitleBox from "../components/PostTitleBox";
import PostContentBox from "../components/PostContentBox";

class SinglePostLayout extends Component {
    componentWillMount(){
        this.props.loadPost()
    }
    
    render(){
        return (
            <div className="SinglePostLayout app-container">
                <PostTitleBox
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    dateTime={this.props.dateTime}/>
                <PostContentBox
                    body={this.props.body}/>
            </div>
        );
    }
}

SinglePostLayout.propTypes = {
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
        loadPost : () => dispatch(fetchSinglePostAction()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinglePostLayout)