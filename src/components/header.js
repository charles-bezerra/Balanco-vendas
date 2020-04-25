import React, { Component } from "react";

export default class Header extends Component{
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-dark bg-secondary shadow fixed-top">
                    <a className="navbar-brand" href="http:\\localhost:3000">Menu</a>
                    <a className="navbar-brand" href="http:\\localhost:3000">{ this.props.name }</a>
                    <a className="navbar-brand" href="http:\\localhost:3000">Sales daily</a>
                </nav>
            </div>
        );
    }
}