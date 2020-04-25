import React, { Component } from 'react';
import Chart from 'chart.js';


export class Bar extends Component{
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.chart = new Chart( 
            this.chartRef.current.getContext('2d') , 
            
            {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'sales',
                        fills: true,
                        responsive: true,
                        backgroundColor: 'rgba(75,192,192,1)',
                        hoverBackgroundColor: 'rgba(75,192,192,201)',
                        data: this.props.data
                    }]
                }
            }
        );
    }

    componentDidUpdate() { 
        this.chart.data.labels = this.props.months;
        this.chart.data.datasets[0].data = [];
        this.chart.update();

        this.chart.data.datasets[0].data = this.props.data;
        this.chart.update(); 
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {        
        return (
            <div className='w-100'>
                <canvas height="100%" ref={ this.chartRef } />
            </div>
        );
    }
} 
