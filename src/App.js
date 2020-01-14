import React, { Component } from 'react';

import Header from './components/header';
import Graphics from './components/graphics';
import Select from './components/select';

const data = require('./dados/dados.json');

class App extends Component {
    vendas = [0,0,0,0,0,0,0,0,0,0,0,0];

    constructor(props){
        super(props);
        this.state = {         
            vendas: this.vendas,
            months: data.months, }
        this.handleChange = this
                            .handleChange
                            .bind(this);
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
        });
    }

    render() {
      return (
        <div className="app">
            <Header />
        
            <div className="mt-5 pt-5 pr-5 pl-5">
        
                <center>
                    <h2>Sales by month</h2>
                </center>
        
                <div className="row w-100">
                    <div className="col-4">
                        <Select 
                            title="Categoria" 
                            name="categories" 
                            options={data.categories}  
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
                    vendas={ this.state.vendas } 
                    months={ this.state.months } 
                />
            </div>
       
       
         </div>
      );
    }
}

export default App;
