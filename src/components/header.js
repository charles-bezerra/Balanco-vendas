import React, { Component } from "react";

const user = require('./../dados/usuario.json');

export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-dark bg-info fixed-top">
                    <a className="navbar-brand" href="http:\\localhost:3000">Menu</a>
                    <a className="navbar-brand" href="http:\\localhost:3000">{ user.name }</a>
                    <a className="navbar-brand" href="http:\\localhost:3000">Sales Report</a>
                </nav>
            </div>
        );
    }
}