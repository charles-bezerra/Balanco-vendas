import React from 'react';
import Header from './header';
import Graphics from "./graphics";
//import ReactDOM from "react-dom";

const data = require('./dados/dados.json');
const user = require('./dados/usuario.json');

var vendas = [0,0,0,0,0,0,0,0,0,0,0,0];

const selectCountMont = (month) => {
    switch (month) {
                case "January":
                  vendas[0]+=1;
                  break;
                case "February":
                  vendas[1]+=1;
                  break;
                case "March":
                 vendas[2]+=1;
                  break;
                case "April":
                 vendas[3]+=1;
                  break;
                case "May":
                 vendas[4]+=1;
                  break;
                case "June":
                 vendas[5]+=1;
                  break;
                case "July":
                 vendas[6]+=1;
                  break;
                case "August":
                 vendas[7]+=1;
                  break;
                case "September":
                 vendas[8]+=1;
                  break;
                case "Octupber":
                 vendas[9]+=1;
                  break;
                case "December":
                 vendas[10]+=1;
                  break;
                case "November":
                 vendas[11]+=1;
                  break;

                default:
                  break;
    }
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: <Graphics vendas={vendas} data={data} />};
    }

    handleChange(e) {        
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].brand === e.target.value && e.target.name === "brands")
                selectCountMont(data.vendas[i].month);
            else if(data.vendas[i].product === e.target.value && e.target.name === "products")
                selectCountMont(data.vendas[i].month);
            else if(data.vendas[i].category === e.target.value && e.target.name === "categories")
                selectCountMont(data.vendas[i].month);
        }

        this.setState({
            value: <Graphics vendas={vendas} data={data} />,
        });

        //ReactDOM.render(
        //    <Graphics vendas={vendas} data={data} />,
        //    document.getElementById('graphics')
        //);
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

            <div className="p-4">
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
            
            <div id="graphics" className="py-2 px-4 graphics">
                { this.state.value }
            </div>
        </div>
      );
    }
}

export default App;
