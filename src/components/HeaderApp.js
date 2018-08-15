import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HeaderApp extends Component {

    renderMsg(message, charged){
        if (charged) {
            return(
                <span className="badge badge-pill badge-success ml-2">
                  {message}
                </span>
            );
        }else {
            return(
                <span className="badge badge-pill badge-danger ml-2">
                  {message}
                </span>
            );
        }
    }

    renderAddInfo(info){
        if (info === '') {
            return null;
        }else {
            return(
                <span className="badge badge-light ml-2">
                  {info}
                </span>
            );
        }
    }

    render(){

        const {message, charged, addInf} = this.props;

        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <Link to="/index" className="navbar-brand text-white">App Graph</Link>
                    <nav className="navbar-nav mr-2 mt-2 mt-lg-0">
                        <Link to="/GraphBar" className="pl-2 text-white">Bar Graph</Link>
                        <Link to="/GraphPie" className="pl-2 text-white">Pie Graph</Link>
                        <Link to="/GraphLine" className="pl-2 text-white">Line Graph</Link>
                        <Link to="/GraphTable" className="pl-2 text-white">Table</Link>
                    </nav>
                    {this.renderMsg(message, charged)}
                    {this.renderAddInfo(addInf)}
                </nav>
            </header>
        );
    }
}

export default HeaderApp;
