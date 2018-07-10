//Goal is to return an object where the keys are the customer names and the values are the total sales for that customer.

const generateCustomerSalesMap = (salesData, customerData) => {
    const customerSalesData = {};

    //Add each customer to the customerSalesData object and then check the salesData array for all the customer's sales
    customerData.forEach(function(customer) {
        //ignore customer files with no name
        if(!customer.name) {
            return;
        }

        //add customers to the new object and calculate their total sales
        customerSalesData[customer.name] = salesData.reduce(function(accumulator, saleInfo){
            if(saleInfo.customerId === customer.id) {
                return saleInfo.total + accumulator;
            }
            return accumulator;
        },0)
    });
    return customerSalesData;
};


module.exports = generateCustomerSalesMap;