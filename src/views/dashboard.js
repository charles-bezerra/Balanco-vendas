import React, { Component } from 'react';

import Header from './../components/header';
import { Bar } from './../components/graphics';
import Select from './../components/select';
import Sales from './../js/sales';

const data = require('./../data/bd');
const user = require('./../data/user');

export default class Dashboard extends Component {
    constructor(props){
        super(props);     
        this.sales = new Sales(data);
        
        this.state = { 
            sales: [] 
        };

        this.handleChange = this.handleChange.bind(this);
    }   

    handleChange(e) {
        this.setState({         
            sales: this.sales.handleChange(e)
        });
    }

    render() {
      return (
        <div className="app">
            <Header name={user.name} />
        
            <div className="mt-5 p-4">
            
                <div className="row w-100">
                    <div className="col-4">
                        <Select 
                            title="Categoria" 
                            name="categories" 
                            options={ data.categories }  
                            onChange={ this.handleChange }
                        />
                    </div>
                        
                    <div className="col-4">
                        <Select 
                            title="Produtos" 
                            name="products" 
                            options={ data.products } 
                            onChange={ this.handleChange } 
                        />
                    </div>
                        
                    <div className="col-4">
                        <Select 
                            title="Marcas" 
                            name="brands" 
                            options={ data.brands } 
                            onChange={ this.handleChange }
                        />
                    </div>

                </div>
            </div>


            <div id="graphics" className="px-4 graphics">
                <Bar
                    data={ this.state.sales } 
                    months={ data.months } 
                />
            </div>
       
       
         </div>
      );
    }
}
