const suma = require('../../services/adder');


describe("Tesr de suma", function(){
    let _numberA;
    let _numberB;

    it("Debería devolver la suma de A y B", function(){
        _numberA = 6;
        _numberB = 7;

        const result = suma.add(_numberA,_numberB);

        expect(result).toEqual(13);
    });
});