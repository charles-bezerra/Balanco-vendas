import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Graphics extends Component{
    data = {
        labels: this.props.data.months,
        datasets: [
            {
                label: 'Vendas',
                fills: true,
                height: "500px",
                responsive: true,
                backgroundColor: 'rgba(75,192,192,1)',
                hoverBackgroundColor: 'rgba(75,192,192,201)',
                data: this.props.vendas
            }
        ]
    }

    render() {
        return (
            <div class="w-100">
                <Bar ref="chart" data={this.data} />
            </div>
        );
    }
} 