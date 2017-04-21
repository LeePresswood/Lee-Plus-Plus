import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './TagList.css';

class TagList extends Component {
    getBootstrapColumn() {
        switch (this.props.columns) {
            case 1:
                return "col-sm-12";
            case 2:
                return "col-sm-6";
            case 3:
                return "col-sm-4";
            case 4:
                return "col-sm-3";
            case 6:
                return "col-sm-2";
            case 12:
                return "col-sm-1";
            default:
                return "hidden";
        }
    }

    buildDataRows() {
        let dataTags = this.props.tags.map((dataTag, index) =>
            <div className={this.getBootstrapColumn()} key={index}>
                <Link to={"/blog/topics/" + dataTag}>{dataTag}</Link>
            </div>
        );

        return <row>{ dataTags }</row>
    }

    render() {
        return (
            <div className="TagList">
                <div className="container margin-20 padding-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <label>{this.props.headerText}</label>
                        </div>
                    </div>
                    <div className="row">
                        {this.buildDataRows()}
                    </div>
                </div>
            </div>
        );
    }
}
export default TagList;