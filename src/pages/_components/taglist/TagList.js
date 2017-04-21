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

    buildHeaderRow() {
        if (this.props.headerText !== undefined) {
            return (
                <div className="row">
                    <div className="col-sm-12">
                        <label>{this.props.headerText}</label>
                    </div>
                </div>
            );
        }
    }

    buildDataRow() {
        let dataTags = this.props.tags.map((dataTag, index) =>
            <div className={this.getBootstrapColumn()} key={index}>
                <Link to={this.props.linkTo + dataTag}>{dataTag}</Link>
            </div>
        );

        return <div className="row">{ dataTags }</div>
    }

    render() {
        return (
            <div className="DataList">
                <div className="container padding-15 margin-10">
                    {this.buildHeaderRow()}
                    {this.buildDataRow()}
                </div>
            </div>
        );
    }
}
export default TagList;