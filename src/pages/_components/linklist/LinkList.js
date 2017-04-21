import React, {Component} from 'react';
import './LinkList.css';

class LinkList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.addGreeting = this.addGreeting.bind(this);
    //
    //     this.state = {greetings: ['Jim', 'Sally', 'Bender']};
    // }
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
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <label>{this.props.headerText}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">a</div>
                        <div className="col-sm-4">b</div>
                        <div className="col-sm-4">c</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LinkList;