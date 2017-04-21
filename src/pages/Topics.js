import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";
import LinkList from "./_components/linklist/LinkList";

class Topics extends Component {
    render() {
        return (
            <div id="Topics">
                <Navbar/>
                <LinkList headerText="Popular Topics"/>
                <LinkList headerText="All Topics"/>
            </div>
        );
    }
}

export default Topics;