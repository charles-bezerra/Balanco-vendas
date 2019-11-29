import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Graphics from "./graphics";

var data = require('./dados/dados.json');
var user = require('./dados/usuario.json');

var vendas = [0,0,0,0,0,0,0,0,0,0,0,0];

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: <Graphics vendas={vendas} data={data} />};
        this.changeGraphicsCategory({"target": {"value": data.categories[0]}});
    }

    changeGraphicsCategory = (event) => {
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].category == event.target.value){
              switch (data.vendas[i].month) {
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
        }        

        console.log("passou");
        
        this.setState({value: <Graphics vendas={vendas} data={data} />});
    }

    changeGraphicsBrand = (event) => {
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].brand == event.target.value){
              switch (data.vendas[i].month) {
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
        }        

        this.setState({value: <Graphics vendas={vendas} data={data} />});
    }
    
    changeGraphicsProduct = (event) => {
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].product == event.target.value){
              switch (data.vendas[i].month) {
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
        }        

        this.setState({value: <Graphics vendas={vendas} data={data} />});
    }

    getOptions(options) {
         let children = [];
         let myOptions = options;
         let option = null;

         for(let i = 0; i < myOptions.length; i++){
            option = myOptions[i];
            if (typeof option == 'object')
                 children.push( <option value={option.name}>{option.name}</option> );
            else
                children.push( <option value={option}>{option}</option> );                         
         }
         return children;
    }

    render() {
      return (
        <div class="app">
            <Header user={user} />

            <div class="p-4">
                <center>
                    <h2>Sales by month</h2>
                </center>

                <div class="row w-100">
                    <div class="col-4">
                        <div class="form-group">
                            Categoria
                            <select  class="form-control" onChange={this.changeGraphicsCategory}>
                                { this.getOptions(data.categories) }
                            </select>
                        </div>
                    </div>
                    
                    <div class="col-4">
                        <div class="form-group">
                            Produtos
                            <select  class="form-control" onChange={this.changeGraphicsProduct}>
                                { this.getOptions(data.products) }
                            </select>
                        </div>
                    </div>
                    
                    <div class="col-4">
                        <div class="form-group">
                            Marcas
                            <select  class="form-control" onChange={this.changeGraphicsBrand}>
                                { this.getOptions(data.brands) }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="graphics" class="py-2 px-4 graphics">
                { this.state.value }
            </div>
        </div>
      );
    }
}

export default App;
