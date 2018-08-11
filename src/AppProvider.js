import React, { Component } from 'react';
import App from './containers/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

class AppProvider extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        );
    }
}

export default AppProvider;
