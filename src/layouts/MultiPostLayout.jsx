import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchMultiPostAction } from '../actions/PostRequestActions'
import '../styles/MultiPostlayout.css';

class MultiPostLayout extends Component {
    componentWillMount(){
        this.props.loadPosts(0)
    }
    
    render(){
        return (
            <div className="MultiPostLayout app-container">
                {this.mapTitlesToCards()}
            </div>
        );
    }
    
    mapTitlesToCards(){
        return this.props.loadedPosts.map((post, index) =>{
            return (
                <div
                    key={index}>
                    <Link to={"/" + index}>
                        {post.title}
                    </Link>
                    <br/>
                    <Link to={"/" + index}>
                        {post.subtitle}
                    </Link>
                    <br/>
                    <Link to={"/" + index}>
                        {post.dateTime}
                    </Link>
                    <br/><br/><br/>
                </div>
        );
        });
    }
}

MultiPostLayout.propTypes = {
    title : PropTypes.string,
    subtitle : PropTypes.string,
    dateTime : PropTypes.string,
    body : PropTypes.array,
    loadedPosts : PropTypes.array,
    loading : PropTypes.bool
};

const mapStateToProps = state => ({
    title : state.postRequestReducer.title,
    subtitle : state.postRequestReducer.subtitle,
    dateTime : state.postRequestReducer.dateTime,
    body : state.postRequestReducer.body,
    loadedPosts : state.postRequestReducer.loadedPosts,
    loading : state.postRequestReducer.loading,
});

const mapDispatchToProps = dispatch =>{
    return {
        loadPosts : (page = 0) => dispatch(fetchMultiPostAction(page)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiPostLayout)