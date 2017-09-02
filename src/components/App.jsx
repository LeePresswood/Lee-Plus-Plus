import React from 'react';
import './App.css';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Content from "./content/Content";

const App = () => (
    <div className="App">
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
);

export default App;