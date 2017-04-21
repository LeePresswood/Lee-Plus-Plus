import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class Topics extends Component {
    constructor(props) {
        super(props);
        this.renderTopicsFromProps = this.renderTopicsFromProps.bind(this);

        // this.state = {greetings: ['Jim', 'Sally', 'Bender']};
    }

    renderTopicsFromProps() {
        if (this.props.match.params.tagId !== undefined) {
            return "Tag id of " + this.props.match.params.tagId + " found";
        }
        return "Main blog";
    }

    render() {
        return (
            <div id="Blog">
                <Navbar/>
                <div>
                    {this.renderTopicsFromProps()}
                </div>
            </div>
        );
    }
}

export default Topics;