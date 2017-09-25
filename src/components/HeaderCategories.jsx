import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/HeaderCategories.css';
import { fetchCategoriesAction } from "../actions/CategoryActions";

class HeaderCategories extends Component {
    componentWillMount(){
        this.props.loadCategories();
    }
    
    render(){
        return (
            <div className="HeaderCategories bottom">
                <div className="app-container">
                    <div className="row">
                        {this.mapCategoriesToLinks()}
                    </div>
                </div>
            </div>
        );
    }
    
    mapCategoriesToLinks(){
        return this.props.categories.map((category, index) =>{
            return category === 'Loading' ?
                <p key={index}>Loading</p> :
                <Link key={index} to={"/categories/" + category + "/pages/0"}>{category}</Link>;
        });
    }
}

HeaderCategories.propTypes = {
    categories : PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
    categories : state.categoryReducer.categories
});

const mapDispatchToProps = dispatch =>{
    return {
        loadCategories : () => dispatch(fetchCategoriesAction()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderCategories)