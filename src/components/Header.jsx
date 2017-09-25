import React, { Component } from 'react';
import HeaderNavigation from "./HeaderNavigation";
import HeaderCategories from "./HeaderCategories";

class Header extends Component {
    render(){
        return (
            <header className="Header">
                <HeaderNavigation/>
                <HeaderCategories/>
            </header>
        );
    }
}

export default Header;