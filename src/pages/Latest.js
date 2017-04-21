import React, {Component} from 'react';

import Navbar from "./_components/navbar/Navbar";

class Latest extends Component {
    constructor(props) {
        super(props);
        this.renderLatestFromProps = this.renderLatestFromProps.bind(this);

        // this.state = {greetings: ['Jim', 'Sally', 'Bender']};
    }

    renderLatestFromProps() {
        if (this.props.match.params.tagId !== undefined) {
            return "Latest blog posts for tag id " + this.props.match.params.tagId;
        }
        return "Latest blog posts";
    }

    render() {
        return (
            <div id="Lastest">
                <Navbar/>
                <div>
                    {this.renderLatestFromProps()}
                </div>
            </div>
        );
    }
}

export default Latest;