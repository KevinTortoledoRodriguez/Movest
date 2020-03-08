import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp }   from './routes';

ReactDOM.render(
    <BrowserRouter>
        {RoutesApp}
    </BrowserRouter>, document.getElementById('root')
    );
