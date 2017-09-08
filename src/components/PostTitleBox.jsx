import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchPostAction } from '../actions/PostRequestActions'
import '../styles/PostTitleBox.css';

class PostTitleBox extends Component{
    componentWillMount(){
        this.props.loadPost()
    }
    
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
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    dateTime: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    loading: PropTypes.bool
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
)(PostTitleBox)
