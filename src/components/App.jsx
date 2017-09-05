import React, {Component} from 'react';
import Navbar from "../components/navbar/Navbar";
import Content from "./content/Content";
import Footer from "../components/footer/Footer";

class App extends Component {
    render(){
        return (
            <div className="App">
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
