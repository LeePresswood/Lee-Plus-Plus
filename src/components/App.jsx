import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Content from "./content/Content";
import Footer from "../components/footer/Footer";

const App = () => (
    <div className="App">
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
);

export default App;