import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Navigator from "./Navigator";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Navigator/>
    </BrowserRouter>,
  document.getElementById('root')
);
