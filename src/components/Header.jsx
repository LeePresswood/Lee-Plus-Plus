import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import '../styles/Header.css';
import logo from '../img/lpp-128.png';
import { fetchCategoriesAction } from "../actions/CategoryActions";

class Header extends Component {
    componentWillMount(){
        this.props.loadCategories();
    }
    
    render(){
        return (
            <header className="Header">
                <div className="top">
                    <div className="app-container">
                        <div className="left">
                            <Link to="/">
                                <img src={logo} alt="Lee++ Logo" />
                            </Link>
                        </div>
                        <nav className="right">
                            <Link to="/">Blog</Link>
                            <a href="https://github.com/LeePresswood">GitHub</a>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                </div>
                <div className="bottom">
                    <div className="app-container">
                        <div className="row">
                            {this.mapCategoriesToLinks()}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    
    mapCategoriesToLinks(){
        return this.props.categories.map((category, index) =>{
            return (
                <Link key={index} to={"/categories/" + category + "/pages/0"}>{category}</Link>
            );
        });
    }
}

Header.propTypes = {
    categories : PropTypes.array
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
)(Header)