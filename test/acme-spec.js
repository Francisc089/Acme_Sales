const expect = require('chai').expect;
const generateCustomerSalesMap = require('./acme.js');
const sinon = require('sinon');

const sales = [
    {customerId : 1,
    orderId : 1,
    total: 3},
    {customerId : 2,
    orderId : 2,
    total : 4 }
];

const customers = [
    {id : 1,
    name: 'Moe'},
    {id : 2,
    name: 'Larry'}
];

const repeatSalesEntries = [
    {customerId : 1,
    orderId : 1,
    total: 3},
    {customerId : 2,
    orderId : 2,
    total : 4 },
    {customerId : 1,
    orderId : 4,
    total: 7},
    {customerId : 2,
    orderId : 4,
    total : 5 }
];

const repeatCustomerEntries = [
    {id : 1,
    name: 'Moe'},
    {id : 2,
    name: 'Larry'},
    {id : 1,
    name: 'Moe'},
    {id : 2,
    name: 'Larry'}
];

describe('Customer Sales Map function', function(){
    it('checks that the generateCustomerSalesMap is defined', function(){
      expect( generateCustomerSalesMap).to.be.ok;
    });
    it('returns an object', function() {
        expect( generateCustomerSalesMap([], [])).to.eql( {} );
    });
    it('combines simple sales data', function() {
        expect(generateCustomerSalesMap(sales, customers)).to.eql({'Moe' : 3, 'Larry' : 4})
    });
    it('accumulates multiple sales entries for each customer', function(){
        expect(generateCustomerSalesMap(repeatSalesEntries, customers)).to.eql({'Moe' : 10, 'Larry' : 9})
    });
    it('combines multiple customer entries ', function(){
        expect(generateCustomerSalesMap(repeatSalesEntries,repeatCustomerEntries)).to.eql({'Moe' : 10, 'Larry' : 9})
    });
    it('ignores customers with no name', 
    function() {
        expect(generateCustomerSalesMap(sales, [{id: 1, name: undefined}])).to.eql({})
});
  })