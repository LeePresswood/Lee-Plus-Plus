import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Navigator from "./components/navigator/Navigator";

const App = () => {
    return (
        <BrowserRouter>
            <Navigator/>
        </BrowserRouter>
    );
};

export default App;
