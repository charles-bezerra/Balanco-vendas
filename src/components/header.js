import React, { Component } from "react";

export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-dark bg-info">
                    <a className="navbar-brand" href="#">Menu</a>
                    <a className="navbar-brand" href="#">{ this.props.user.name }</a>
                    <a className="navbar-brand" href="#">Sales Report</a>
                </nav>
            </div>
        );
    }
}