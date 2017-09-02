import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="app-container">
                    {/*<hr/>*/}
                    Made by Lee Presswood
                </div>
            </footer>
        );
    }
}

export default Footer;