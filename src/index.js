import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter} from 'react-router-dom';
import './index.css';
import AppProvider from './AppProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <AppProvider />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
