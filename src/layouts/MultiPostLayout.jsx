import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchMultiPostAction } from '../actions/PostRequestActions'
import '../styles/MultiPostlayout.css';

class MultiPostLayout extends Component {
    componentWillMount(){
        this.props.loadPosts(this.props.match.params.pageId);
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
                    <Link to={"/posts/" + index}>
                        {post.title}
                    </Link>
                    <br/>
                    <Link to={"/posts/" + index}>
                        {post.subtitle}
                    </Link>
                    <br/>
                    <Link to={"/posts/" + index}>
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
    body : PropTypes.arrayOf(PropTypes.object),
    loadedPosts : PropTypes.arrayOf(PropTypes.object),
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
        loadPosts : (page) => dispatch(fetchMultiPostAction(page)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiPostLayout)