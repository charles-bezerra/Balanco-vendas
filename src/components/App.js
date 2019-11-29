import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Graphics from "./graphics";
//import ReactDOM from "react-dom";

const data = require('./dados/dados.json');
const user = require('./dados/usuario.json');

class App extends Component {
    vendas = [0,0,0,0,0,0,0,0,0,0,0,0];

    constructor(props){
        super(props);
        this.state = {         
            vendas: this.vendas,
            months: data.months,
            testes: 0 
        }
        this.handleChange = this.handleChange.bind(this);
    }

    selectCountMont = (month) => {
        switch (month) {
                case "January":
                  this.vendas[0]+=1;
                  break;
                case "February":
                  this.vendas[1]+=1;
                  break;
                case "March":
                 this.vendas[2]+=1;
                  break;
                case "April":
                 this.vendas[3]+=1;
                  break;
                case "May":
                 this.vendas[4]+=1;
                  break;
                case "June":
                 this.vendas[5]+=1;
                  break;
                case "July":
                 this.vendas[6]+=1;
                  break;
                case "August":
                 this.vendas[7]+=1;
                  break;
                case "September":
                 this.vendas[8]+=1;
                  break;
                case "Octupber":
                 this.vendas[9]+=1;
                  break;
                case "December":
                 this.vendas[10]+=1;
                  break;
                case "November":
                 this.vendas[11]+=1;
                  break;

                default:
                  break;
        }
    }
    
    clearVendas(){
        for(let i = 0; i < this.vendas.length; i++)
            this.vendas[i] = 0;
    }

    handleChange = (e) => {
        this.clearVendas();

        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].brand === e.target.value && e.target.name === "brands")
                this.selectCountMont(data.vendas[i].month);
            else if(data.vendas[i].product === e.target.value && e.target.name === "products")
                this.selectCountMont(data.vendas[i].month);
            else if(data.vendas[i].category === e.target.value && e.target.name === "categories")
                this.selectCountMont(data.vendas[i].month);
        }

        this.setState({
            vendas: this.vendas,
            months: data.months,
            testes: this.state.testes+1             
        });
    }

    getOptions(options) {
         let children = [];
         let myOptions = options;
         let option = null;
         for(let i = 0; i < myOptions.length; i++){
            option = myOptions[i];
            if (typeof option == 'object'){
                 children.push( <option key={i} value={ option.name }>{option.name}</option> );
            }
            else{
                children.push( <option key={i} value={ option }>{ option }</option> );                         
            }
         }
         return children;
    }

    render() {
      return (
        <div className="app">
            <Header user={user} />

            <div className="mt-5 pt-5 pr-5 pl-5">
                <center>
                    <h2>Sales by month</h2>
                </center>

                <div className="row w-100">
                    <div className="col-4">
                        <div className="form-group">
                            Categoria
                            <select  className="form-control" name="categories" onChange={this.handleChange}>
                                { this.getOptions(data.categories) }
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="form-group">
                            Produtos
                            <select  className="form-control" name="products" onChange={this.handleChange}>
                                { this.getOptions(data.products) }
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="form-group">
                            Marcas
                            <select  className="form-control" name="brands" onChange={this.handleChange}>
                                { this.getOptions(data.brands) }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="graphics" className="px-4 graphics">
                <Graphics vendas={this.state.vendas} months={this.state.months} />
                { this.state.testes } 
            </div>
        </div>
      );
    }
}

App.propTypes = {
    value: PropTypes.any
}

export default App;
