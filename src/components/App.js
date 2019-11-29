import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Graphics from "./graphics";

var data = require('./dados/dados.json');
var user = require('./dados/usuario.json');

var vendas = [0,0,0,0,0,0,0,0,0,0,0,0];

function selectCountMont(month) {
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
        this.state = {value: ""};
    }

    updateGraphics(){
        ReactDOM.render(
          <Graphics vendas={vendas} data={data} />,
          document.getElementById('graphics')
        );
    }

    changeGraphicsCategory = (event) =>{
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].category == event.target.value)
                selectCountMont(data.vendas[i].month);
        } 

        this.updateGraphics();       
    }

    changeGraphicsBrand = (event) => {
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].brand == event.target.value)
                selectCountMont(data.vendas[i].month);
        }        

        this.updateGraphics();          
    }
    
    changeGraphicsProduct = (event) => {
        for(let i = 0; i < data.vendas.length; i++){
            if(data.vendas[i].product == event.target.value)
                selectCountMont(data.vendas[i].month);
        }        

        this.updateGraphics();       
    }

    getOptions(options) {
         let children = [];
         let myOptions = options;
         let option = null;

         for(let i = 0; i < myOptions.length; i++){
            option = myOptions[i];
            if (typeof option == 'object')
                 children.push( <option value={ option.name }>{option.name}</option> );
            else
                children.push( <option value={ option }>{ option }</option> );                         
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
                            <select  className="form-control" onChange={this.changeGraphicsCategory}>
                                { this.getOptions(data.categories) }
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="form-group">
                            Produtos
                            <select  className="form-control" onChange={this.changeGraphicsProduct}>
                                { this.getOptions(data.products) }
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="form-group">
                            Marcas
                            <select  className="form-control" onChange={this.changeGraphicsBrand}>
                                { this.getOptions(data.brands) }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="graphics" className="py-2 px-4 graphics"></div>
        </div>
      );
    }
}

export default App;
