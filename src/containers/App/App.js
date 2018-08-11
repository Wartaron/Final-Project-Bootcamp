import React, { Component } from 'react';
import './App.css';
import HeaderApp from '../../components/HeaderApp';
import ContentApp from '../ContentApp/index';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';

class App extends Component {

    render() {
        const message = this.props.isCharged ? 'Charged Data': 'No Charged Data';
        const {isCharged} = this.props;

        return (
            <div className="App">
                <HeaderApp message={message} charged={isCharged}/>
                <ContentApp charged={isCharged}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isCharged: state.data.isCharged
    }
}

App = withRouter(connect(mapStateToProps, null)(App));

export default App;
