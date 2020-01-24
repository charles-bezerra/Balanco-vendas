import React, {Component} from 'react';

import Header from './../components/header';
import Graphics from './../components/graphics';
import Select from './../components/select';

const data = require('./../data/bd');
const user = require('./../data/user');
let Sales = require('./../js/sales');

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.sales = new Sales(data);
        this.state = {         
            sales: this.sales.getMonthSales(),
        };
    }   

    handleChange = (e) => {
        this.sales.handleChange(e);
        this.setState({         
            sales: this.sales.getMonthSales()
        });
    }

    render() {
      return (
        <div className="app">
            <Header name={user.name} />
        
            <div className="mt-5 p-4">
                <center>
                    <h4>Sales by month</h4>
                </center>
        
                <div className="row w-100">
                    <div className="col-4">
                        <Select 
                            title="Categoria" 
                            name="categories" 
                            options={ data.categories }  
                            onChange={ this.handleChange.bind(this) }
                        />
                    </div>
                        
                    <div className="col-4">
                        <Select 
                            title="Produtos" 
                            name="products" 
                            options={ data.products } 
                            onChange={ this.handleChange.bind(this)} 
                        />
                    </div>
                        
                    <div className="col-4">
                        <Select 
                            title="Marcas" 
                            name="brands" 
                            options={ data.brands } 
                            onChange={ this.handleChange.bind(this) }
                        />
                    </div>

                </div>
            </div>


            <div id="graphics" className="px-4 graphics">
                <Graphics 
                    sales={ this.state.sales } 
                    months={ data.months } 
                />
            </div>
       
       
         </div>
      );
    }
}
