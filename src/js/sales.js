function Sales (data){
    this.data = data;
    var monthSales = [0,0,0,0,0,0,0,0,0,0,0,0];

    this.clearSales = () => {
        monthSales.map(function(){
            return 0;
        });
    };
    
    this.handleChange = (e) => {
        this.clearSales();
        this.countSales(e);
    };

    this.updateData = function(data){
        this.data = data;
    };

    this.countSales = (arg) => {
        this.data.sales.map(function (e){
            if(arg.target.name === "categories" && e.category === arg.target.value)
                monthSales[e.monthID-1] += 1;
            else if(arg.target.name === "brands" && e.brand === arg.target.value)
                monthSales[e.monthID-1] += 1;
            else if(arg.target.name === "products" && e.product === arg.target.value)
                monthSales[e.monthID-1] += 1;
            return e;
        });
    };

    this.getMonthSales = () => {
        return monthSales;
    }
}

module.exports = Sales;