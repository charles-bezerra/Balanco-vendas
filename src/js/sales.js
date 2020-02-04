function Sales (data){
    this.data = data;
    let monthSales = [0,0,0,0,0,0,0,0,0,0,0,0];

    this.handleChange = (e) => {
        monthSales.map(() => { return 0; });
        this.countSales(e);
    };

    this.updateData = function(data){
        this.data = data;
    };

    this.countSales = (arg) => {
        this.data.sales.forEach(function (e,i){
            if(arg.target.name === "categories" && e.category === arg.target.value)
                monthSales[e.monthID-1] += 1;
            else if(arg.target.name === "brands" && e.brand === arg.target.value)
                monthSales[e.monthID-1] += 1;
            else if(arg.target.name === "products" && e.product === arg.target.value)
                monthSales[e.monthID-1] += 1;
        });
    };

    this.getMonthSales = () => {
        return monthSales;
    }
}

export default Sales;