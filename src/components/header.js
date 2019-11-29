import React, { Component } from "react";

export default class Header extends Component{
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-info">
                    <a class="navbar-brand" href="#">Menu</a>
                    <a class="navbar-brand" href="#">{ this.props.user.name }</a>
                    <a class="navbar-brand" href="#">Sales Report</a>
                </nav>
            </div>
        );
    }
}