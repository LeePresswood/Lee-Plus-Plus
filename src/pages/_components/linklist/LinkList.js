import React, {Component} from 'react';
import './LinkList.css';

class LinkList extends Component {
    constructor(props) {
        super(props);
        this.getBootstrapColumn = this.getBootstrapColumn.bind(this);
        this.buildDataRows = this.buildDataRows.bind(this);

        // this.state = {greetings: ['Jim', 'Sally', 'Bender']};
    }

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
        console.log(this.props);
        let dataTags = this.props.tags.map((dataTag, index) =>
            <div className={this.getBootstrapColumn()} key={index}>{dataTag}</div>
        );

        return <row>{ dataTags }</row>
    }

    //
    // renderGreetings() {
    //     return this.state.greetings.map(name => (
    //         <HelloWorld key={name} name={name}/>
    //     ));
    // }
    //
    // addGreeting(newName) {
    //     this.setState({greetings: [...this.state.greetings, newName]});
    // }

    render() {
        return (
            <div className="LinkList">
                <div className="container margin-20 margin-20">
                    <div className="row">
                        <div className="col-sm-12">
                            <label>{this.props.headerText}</label>
                        </div>
                    </div>
                    <div className="row">
                        {this.buildDataRows()}
                        {/*<div className="col-sm-4">a</div>*/}
                        {/*<div className="col-sm-4">b</div>*/}
                        {/*<div className="col-sm-4">c</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
export default LinkList;